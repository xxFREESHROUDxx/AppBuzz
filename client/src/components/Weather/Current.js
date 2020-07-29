import React,{useState} from 'react';
import "./current.css";
export default function Current() {
   
    
 return (
   <div className="row">
    <div className="col-xl-6">
    <div className="container">
        <div className="app">
      <div className="header">
        <img src="https://s5.postimg.cc/7l2xf9mjr/mumbai.jpg" alt="" />
        <span className="city">
              Mumbai, India
              <i className="fa fa-map-marker"></i>
              <span className="today">Today</span>
        </span>
        <span className="weather">
              <span className="temp">
                22<sup>&deg;</sup>
                <span className="unit">c</span>
        </span>
        <span className="wind-scale">
                <table>
                  <tr>
                    <td>Wind Direction</td>
                    <td>
                      <i className="wi wi-wind towards-45-deg"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Wind Scale</td>
                    <td>
                      <i className="wi wi-wind-beaufort-7"></i>
                    </td>
                  </tr>
                </table>
              </span>
        <i className="wi wi-night-sleet"></i>
        <span className="time">
                <i className="wi wi-time-3"></i>
              </span>
        <span className="day">Monday</span>
        </span>
      </div>
      <div className="body">
        <span className="title">Weather Stats</span>
        <div className="graph">
          <ul>
            <li className="graph-knob-mt-26">
              <span className="graph-temp">
                    <i className="wi wi-night-cloudy"></i>
                    26<sup>&deg;</sup>
                  </span> 23
            </li>
            <li className="graph-knob-mt-25">
              <span className="graph-temp">
                    <i className="wi wi-lightning"></i>
                    25<sup>&deg;</sup>
                  </span> 24
            </li>
            <li className="graph-knob-mt-28">
              <span className="graph-temp">
                    <i className="wi wi-night-cloudy-gusts"></i>
                    28<sup>&deg;</sup>
                  </span> 25
            </li>
            <li className="today graph-knob-mt-22">
              <span className="graph-temp">
                    <i className="wi wi-night-sleet"></i>
                    22<sup>&deg;</sup>
                  </span> 26
            </li>
            <li className="graph-knob-mt-20">
              <span className="graph-temp">
                    <i className="wi wi-night-alt-thunderstorm"></i>
                    20<sup>&deg;</sup>
                  </span> 27
            </li>
            <li className="graph-knob-mt-18">
              <span className="graph-temp">
                    <i className="wi wi-smoke"></i>
                    18<sup>&deg;</sup>
                  </span> 28
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <span className="title">Friends</span>
        <ul className="friends">
          <li>
            <img src="https://s5.postimg.cc/bc7wnuaub/hardik.jpg" alt="" />
            <span className="friends-city-weather">
                  <i className="wi wi-night-sprinkle"></i>
                  <span className="temp">25<sup>&deg;</sup></span>
            </span>
            <span className="detail">
                  Hardik
                  <span className="city">
                    Surat
                  </span>
            <span className="country">
                    India
                  </span>
            </span>
          </li>
          <li>
            <img src="https://s5.postimg.cc/89bry7l9f/virat.jpg" alt="" />
            <span className="friends-city-weather">
                  <i className="wi wi-night-cloudy-high"></i>
                  <span className="temp">21<sup>&deg;</sup></span>
            </span>
            <span className="detail">
                  Virat
                  <span className="city">
                    Delhi
                  </span>
            <span className="country">
                    India
                  </span>
            </span>
          </li>
          <li>
            <img src="https://s5.postimg.cc/cfwmdjkv7/dhoni.jpg" alt="" />
            <span className="friends-city-weather">
                  <i className="wi wi-night-cloudy-windy"></i>
                  <span className="temp">29<sup>&deg;</sup></span>
            </span>
            <span className="detail">
                  Dhoni
                  <span className="city">
                    Ranchi
                  </span>
            <span className="country">
                    India
                  </span>
            </span>
          </li>
          <li>
            <img src="https://s5.postimg.cc/o6ajuxdnn/sachin.jpg" alt="" />
            <span className="friends-city-weather">
                  <i className="wi wi-night-sleet"></i>
                  <span className="temp">22<sup>&deg;</sup></span>
            </span>
            <span className="detail">
                  Sachin
                  <span className="city">
                    Mumbai
                  </span>
            <span className="country">
                    India
                  </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>

      </div>
  );
}

