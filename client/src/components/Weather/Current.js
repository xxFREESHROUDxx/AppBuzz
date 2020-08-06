import React from 'react';
import "./current.css";
import { Loading } from '../macros/Loading';
export default function Current({current, Daily, Hourly, setCurrentPage, WeatherZone,loading }) {
   
    const RisedateObj = new Date(current.sunrise * 1000); 
    const RiseutcString = RisedateObj.toUTCString();
    const Risetime = new Date(RiseutcString).toTimeString();

    const SetdateObj = new Date(current.sunset * 1000); 
    const SetutcString = SetdateObj.toUTCString();
    const Settime = new Date(SetutcString).toTimeString();

 return (
      <div className="weather-main-wrapper container">
      <Loading loading={loading} />
        <div className="row">
          <div className="col-12 text-center mt-3">
            <h4>Today's Weather</h4>
          </div>
          <div className="col-md-6 col-sm-6 col-6 m-auto text-left exact">
              <h1>{(current.temp - 273.15).toFixed(1)}<sup>&deg;</sup>C</h1>
              { current.weather ? current.weather.map((curr,key) => <p>{curr.main} | {curr.description}</p>) : ""}
          </div>
          <div className="col-md-6 col-md-6 col-6 detail">
            <p className="font-weight-bold">{WeatherZone}</p>
            <p><span className="font-weight-bold"><i className="fas fa-cloud"></i> clouds</span> {current.clouds}</p>
            <p><span className="font-weight-bold"><i className="fas fa-thermometer-full"></i> Feels Like</span> {(current.feels_like - 273.15).toFixed(1)}</p>
            <p><span className="font-weight-bold"><i className="fas fa-tint"></i> Humidity</span> {current.humidity}</p>
            <p><span className="font-weight-bold"><i className="fas fa-compress-alt"></i> Pressure</span> {current.pressure}</p>
            <p><span className="font-weight-bold"><i className="fab fa-affiliatetheme"></i> UVI</span> {current.uvi}</p>
            <p><span className="font-weight-bold"><i className="fas fa-compass"></i> Wind Degree</span> {current.wind_deg}</p>
            <p><span className="font-weight-bold"><i class="fas fa-tachometer-alt"></i> Wind Speed</span> {current.wind_speed}</p>
            <p><span className="font-weight-bold"><i class="fas fa-sun"></i> Sunrise</span> {Risetime}
            </p>
            <p><span className="font-weight-bold"><i class="fa fa-sun"></i> Sunset</span> {Settime}
             </p>
          </div>
        </div>
      </div>
  );
}

