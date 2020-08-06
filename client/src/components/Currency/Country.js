import React, { useState, useEffect } from "react";

import {Loading } from "../macros/Loading";

const Country = ({c}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(()=>{      
        setLoading(true);
        let datas = [];
        
        Object.keys(c)
        .map((key) => datas.push(
            {
                country:key,
                currency: c[key].name,
                symbol: c[key].symbol,
                meta: c[key].countries,
            }
            ))
       
            setData(datas);
          setLoading(false);
    },[c])

   
       
        return(
               <div className="row">
               <Loading loading={loading} />
                  {data.map((curr,i)=>{
                      const flag = curr.country.toLowerCase().slice(0,-1);
                  return ( <div className="col-lg-3 col-md-6 col-6" key={i}>
                    <div className="contry_box">
                        <div className="cb_img w-100 d-block">
                            <img src={`https://www.countryflags.io/${flag}/flat/64.png`} alt={`${flag} Flag`}/>
                        </div>
                        <div className="cb_details w-100">
                        {curr.meta.map((co,j)=><h6 key={j} className="font-weight-bold">{co.name}</h6>)}
                            <p><span className="font-weight-bold">Currency:</span> {curr.currency}</p>
                            <p><span className="font-weight-bold">Code: </span>{curr.country}</p>
                            <p><span className="font-weight-bold">Symbol: </span> {curr.symbol}</p>
                        </div>  
                    </div>
                  </div>)
                   }
                 )}
                </div> 
        )           
    }
export default Country;