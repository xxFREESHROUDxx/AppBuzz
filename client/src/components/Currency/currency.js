import React, { useState, useEffect } from "react";
import axios from "axios";
import CR from "./CR";
import Convert from "./Convert";
import "./currency.css";
import Country from "./Country";
import { Loading } from "../macros/Loading";
const Currency = () => {
    const [ratesComp,setRC] = useState(true);
    const [currencyComp, setCC] = useState(false);
    const [convertComp,setCo] = useState(false);
    const [countries, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
           Symbols();
    },[]);

    async function Symbols(){
        setLoading(true);
        axios({
        method: 'get',
        url: 'https://v1.nocodeapi.com/twonty/cx/nBoNPMcrQCUvmOfv/symbols?api_key=UlBjKbXwuRGQIXLNB', 
    }).then(function (response) {
           setCountry(response.data);
           setLoading(false);
    }).catch(function (error) {
            // handle error
            console.log(error);
    })
}

    
    function rateComp(){
        setRC(true);
        setCC(false);
        setCo(false);
    }
    function CurrComp(){
        setRC(false);
        setCC(true);
        setCo(false);
    }
    function ConvertComp(){
        setRC(false);
        setCC(false);
        setCo(true);
    }


       
        return(
          <div className="container">
            <Loading loading={loading} />
               <div className="row">
                   <div className="col-md-10 col-lg-6 col-sm-12 m-auto">
                   <div className="row py-3 btn-wrap">
                       <button onClick={rateComp} 
                       className={ ratesComp ? "btn btn-sm mx-2 btn-outline-dark_e": "btn btn-sm mx-2 btn-dark_e"}>Rates</button>
                       <button onClick={CurrComp} 
                       className={ currencyComp ? "btn btn-sm mx-2 btn-outline-dark_e": "btn btn-sm mx-2 btn-dark_e"}>Currencies</button>
                       <button onClick={ConvertComp} 
                       className={ convertComp ? "btn btn-sm mx-2 btn-outline-dark_e": "btn btn-sm mx-2 btn-dark_e"}>Convert</button>
                   </div>
                        <div style={{marginTop:"5rem"}}>
                        {ratesComp ? <CR /> : (convertComp ? <Convert /> : <Country c={countries} />)}
                        </div>
                       </div> 
                   </div>
               </div>
        )           
    }
export default Currency;