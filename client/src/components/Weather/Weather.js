import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {

    const [lat,setLat] = useState();
    const [lon,setLon] = useState();
    const [error,seterror] = useState('');
    const [Weather,setWeather] = useState([]);
    const [Current, setCurrent] =  useState([]);
    const [Hourly, setHourly] = useState([]);
    const [Daily, setDaily] = useState([]);

    
    useEffect(() =>{
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(postion => {
                  setLat(postion.coords.latitude);
                  setLon(postion.coords.longitude);
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
           <div className="container">
               <div className="row">
                   <div className="col-md-6 m-auto">
                       <div className="form-wrap mt-5">
                            <h3>latitude : {Weather.lat}</h3>
                            <h3>longitude : {Weather.lon}</h3>
                            <p>TimeZone : {Weather.timezone}</p>
                            <p>TimeZone offset : {Weather.timezone_offset}</p>
                            <p>Current Clouds : {Current.clouds}</p>
                       </div>
                   </div>
               </div>

           </div>
        )
    }
export default Weather;