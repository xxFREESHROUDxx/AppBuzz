import React, { useState, useEffect } from "react";
import axios from "axios";


const Weather = () => {
    const [error,seterror] = useState('');
    const [Weather,setWeather] = useState([]);
    const [Currents, setCurrent] =  useState([]);
    const [Hourly, setHourly] = useState([]);
    const [Daily, setDaily] = useState([]);
    const [isCurrentPage,setCurrentPage] = useState(true);

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
         await axios.post(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=375afe81850264034eab137ce949e9b6`)
                    .then(result =>{
                        setWeather(result.data);
                        setCurrent(result.data.current);
                        setHourly(result.data.hourly);
                        setDaily(result.data.daily);
                        console.log(result.data)
                    })
                    .catch(err =>{
                        seterror(err);
                    })}
       
        return(
          isCurrentPage ?  <div className="container">
               <div className="row">
                   <div className="col-md-10 col-lg-6 col-sm-12 m-auto">
                            <h3>latitude : {Weather.lat}</h3>
                            <h3>longitude : {Weather.lon}</h3>
                            <p>TimeZone : {Weather.timezone}</p>
                            <p>TimeZone offset : {Weather.timezone_offset}</p>
                            <p>Current Clouds : {Currents.clouds}</p>
                       </div> 
                       {/* <Current /> */}
                   </div>
                   <button onClick={() => setCurrentPage(false)}>Weekly</button>
               </div> :
               <div> <h4>Weekly report</h4>
               <button onClick={()=>setCurrentPage(true)}>Today</button>
               </div>
        )
    }
export default Weather;