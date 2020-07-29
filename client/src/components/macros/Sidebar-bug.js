import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {Darktoggle} from './DarkModetoggle';

export default function Sidebar(){
  const getInitialState = () =>{
    const state = JSON.parse(localStorage.getItem("dark")) || false;
    return state;
  }

  const [darkMode, setDarkMode] = useState(getInitialState);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("dark",JSON.stringify(!darkMode));
  }

  useEffect(()=>{
    if (darkMode===true) {
      document.body.classList.add('dark-mode'); 
    }else{
      document.body.classList.remove('dark-mode');
    }
  },[darkMode]);



  return (
    
    <div className="sidebar">
      <div className="container pageTitle">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <ul>
              <li>
                <img src="/images/square.png" height="16px" alt=""/> AppBuzz
              </li>
              <li className="text-right">
              <ul>
                  <li className="toggler">
                  <Darktoggle
                      checked={darkMode} 
                      onClick={toggleMode}
                      size={50}
                  />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}
