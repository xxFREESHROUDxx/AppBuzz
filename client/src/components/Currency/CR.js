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
    },[src]);

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
           
           const inf = {
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

          setInfo(inf);
          setLoading(false);
    },[countryRates])

    
    async function Data(src){
       console.log(src);
            setLoading(true);
                 await axios({
                    method: 'get',
                    url: `https://v1.nocodeapi.com/twonty/cx/nBoNPMcrQCUvmOfv/rates?api_key=UlBjKbXwuRGQIXLNB&source=${src}`, 
                }).then(function (response) {
                       setCR(response.data.rates);
                       setLoading(false);
                }).catch(function (error) {
                        // handle error
                        console.log(error);
                })
               
    }

   

const filter = (event) => {
    let srcmew = event.target.value;
    setSrc(srcmew);
    // Data(src);
}
       
        return(
               <div className="container-fluid">
                  <Loading loading={loading} />
                   <h6>Select Source:</h6>
                   <select onChange={filter} value={src} className="form-control">
                        {Object.keys(countryRates).map((opt,i) => <option value={opt} key={i}>{opt}</option>)}
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