import React, { useState, useEffect } from "react";
import axios from "axios";
import Quote from "./Quote";
import "./Quote.css";
import {Loading} from "../macros/Loading";


const Quotes = () => {

    const [quote,setQ] = useState([]);
    const [start,setStart] = useState(0);
    const count = 50;
    const [currentQ, setCurrentQ] = useState([]);
    // const [total,setTotal] = useState('');
    const [end,setend] = useState('');
    const [loading,setLoading] = useState(true);
    // const [lon,setLon] = useState();
    // const [error,seterror] = useState('');
    // const [Weather,setWeather] = useState([]);
    // const [Current, setCurrent] =  useState([]);
    // const [Hourly, setHourly] = useState([]);
    // const [Daily, setDaily] = useState([]);

    
    useEffect(() =>{
        Data();
    },[]);

    
    async function Data(){
       await axios.get("https://type.fit/api/quotes")
        .then(response => {
            setQ(response.data);
            // setTotal(response.data.length);
            setCur(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        });
        }
       
     const setCur = (quote) =>{
         setLoading(true);
        let items = [];
        let end = start+count; 
        setend(end);
        for (let number = start; number < end ; number++) {
            items.push(
                quote[number]
            );
          }
          
        setStart(end);
        setCurrentQ(items); 
        setLoading(false);
    }

    const setBack = (quote) =>{
        setLoading(true);
        let items = [];
        let start_new = start-(2*count);
        if(start_new >= 0){
            let end = start_new+count;
        
        for (let number = start_new; number < end ; number++) {
            items.push(
                quote[number]
            );
          }
          console.log(items)
        setStart(end);
        setCurrentQ(items); 
        setLoading(false);
        }
        
    }

    
        return(
         
           <div className="container">
           <Loading loading={loading} />
               <div className="row">
                   <div className="col-md-6 m-auto">
                        <div className="navigator col-4 ml-auto mt-4">
                       
                            { (start!==count) ? <button className="btn btn-sm btn-dark mt-2 ml-auto mx-2 ac_btn" onClick={ () => setBack(quote)}>
                                <i className="fas fa-arrow-left"></i>
                            </button> : null }
                            <button className="btn btn-sm btn-dark mt-2 ml-auto mx-2 ac_btn" onClick={ () => setCur(quote)}>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                       <div className="form-wrap mt-2">
                           {currentQ.map((item,i) => <Quote item={item} key={i} />)}
                       </div>
                   </div>
               </div>

           </div>
        )
    }
export default Quotes;