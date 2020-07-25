import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBDataTable } from 'mdbreact';
import {Loading } from "../macros/Loading";
const CR = () => {
    const [src,setSrc] = useState("USD");
    const [countryRates,setCR] = useState([]);
    const [info,setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
           Data(src);
    },[]);

    useEffect(()=>{
        setLoading(true);
        let data = [];
        Object.keys(countryRates)
        .map(key => data.push(
            {
                country:key,
                rate: countryRates[key]
            }
            ))
           
           const info = {
            columns: [
              {
                label: 'Country',
                field: 'country',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Rate',
                field: 'rate',
                sort: 'asc',
                width: 100
              },
             
            ],
            rows: data
          };

          setInfo(info);
          setLoading(false);
    },[countryRates])

    
    async function Data(src){
            setLoading(true);
                   await axios({
                    method: 'get',
                    url: `https://v1.nocodeapi.com/twonty/cx/ApwdHiihkdwSKMOB/rates?api_key=UlBjKbXwuRGQIXLNB&source=${src}`, 
                }).then(function (response) {
                        // handle success
                       setCR(response.data.rates);
                       const info = {
                           date: response.data.date,
                           timestamp:response.data.timestamp
                       }
                       setSrc(response.data.source);
                       
                }).catch(function (error) {
                        // handle error
                        console.log(error);
                })
                setLoading(false);    
    }

   

const filter = (event) => {
    let srcmew = event.target.value;
    Data(srcmew);
}
       
        return(
               <div className="container-fluid">
                  <Loading loading={loading} />
                   <h6>Select Source:</h6>
                   <select onChange={ filter} value={src} className="form-control">
                        {Object.keys(countryRates).map((key,i) => <option value={key} key={i}>{key}</option>)}
                   </select>
                   <MDBDataTable 
                    striped
                    bordered
                    hover
                   data={info} />
                </div> 
        )           
    }
export default CR;