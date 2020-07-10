import React, { Component } from "react";
import "./Install.css";
export default class Install extends Component{
     render(){
         return(
            <div className="install-dialog">
            <span className="prompt">Install AppBuzz In Your Phone?</span><hr />
            <button className=" btn add-button">Sure!</button>
            <button className="btn btn-font-warning cancel font-weight-bold">Nope</button>
          </div>
         );
     }
}