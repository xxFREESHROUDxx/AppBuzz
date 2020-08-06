import React from 'react';
import "./current.css";
import Moment from "react-moment";
import { Loading } from '../macros/Loading';
export default function Current({current, Daily, Hourly, setCurrentPage, WeatherZone,loading }) {
   console.log(current);
 return (
      <div className="weather-main-wrapper container">
      <Loading loading={loading} />
        <div className="row">
          <div className="col-12 text-center mt-3">
            <h4>Today's Weather</h4>
          </div>
          <div className="col-md-6 col-sm-6 col-6 m-auto text-left exact">
              <h1>{current.temp - 273.15}<sup>&deg;</sup>C</h1>
          </div>
          <div className="col-md-6 col-md-6 col-6">
            <p>{WeatherZone}</p>
            <p>clouds {current.clouds}</p>
            <p>Feels Like {current.feels_like - 273.15}</p>
            <p>Humidity {current.humidity}</p>
            <p>Pressure {current.pressure}</p>
            <p>UVI {current.uvi}</p>
            <p>Wind Degree {current.wind_deg}</p>
            <p>Wind Speed {current.wind_speed}</p>
            <p>Sunrise {current.sunrise}</p>
            <p>Sunset {current.sunset}</p>
          </div>
        </div>
      </div>
  );
}

