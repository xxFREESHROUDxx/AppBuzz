import React, { Component } from "react";
export default class Footer extends Component{
   
    backButton(){
        return window.history.go(-1);
    }
     render(){
         return(
            <div className="footer">
                <div className="container">
                    <a href="/" className="right-text">
                        <i className="fas fa-home"></i>
                    </a>
                
                    <button className="left-text btn btn-bolder" onClick={ this.backButton }>
                        Back
                    </button>
                </div>
          </div>
         );
     }
}