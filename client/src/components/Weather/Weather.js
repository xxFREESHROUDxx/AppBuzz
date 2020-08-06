import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./Current";

const Weather = () => {
    const [error,seterror] = useState('');
    const [WeatherZone,setWeatherTimeZone] = useState([]);
    const [Currents, setCurrent] =  useState([]);
    const [Hourly, setHourly] = useState([]);
    const [Daily, setDaily] = useState([]);
    const [isCurrentPage,setCurrentPage] = useState(true);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(postion => {
                  Data(postion.coords.latitude, postion.coords.longitude);      
              });
            } else {
                 seterror("Geolocation is not supported by this browser.");
            } 
    },[]);

    
    async function Data(lat,lon){
        setLoading(true);
         await axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=375afe81850264034eab137ce949e9b6`)
                    .then(result =>{
                        setWeatherTimeZone(result.data.timezone);
                        setCurrent(result.data.current);
                        setHourly(result.data.hourly);
                        setDaily(result.data.daily);
                        setLoading(false);
                    })
                    .catch(err =>{
                        seterror(err);
                    })}
       
        return(
          isCurrentPage ? 
                       <Current current={Currents} hourly={Hourly} Daily={Daily} setCurrentPage={setCurrentPage} WeatherZone={WeatherZone} loading={loading} />  
                   :
               <div> <h4>Weekly report</h4>
               <button onClick={()=>setCurrentPage(true)}>Today</button>
               {error}
               </div>
        )
    }
export default Weather;