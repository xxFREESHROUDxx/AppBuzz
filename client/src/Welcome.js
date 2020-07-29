import React, { Component } from "react";
import { Link} from "react-router-dom";


class Welcome extends Component{
    render(){
        return(
            <div>
            <div className="welcome-wrapper">
            <main className="row welcome">

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/books'}> <i className="fas fa-book"></i><br />books</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/currency'}> <i className="fas fa-money-bill-wave"></i><br />currency</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/chat'}> <i className="fas fa-comment-alt"></i><br />chat</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/music'}> <i className="fas fa-music"></i><br />music</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/news'}> <i className="far fa-newspaper"></i><br />news</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/quotes'}> <i className="fas fa-bacon"></i><br/>quotes</Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
            <Link to={'/weather'}> <i className="fas fa-cloud"></i><br />weather</Link>
            </div>
            
           
            </main>
            </div>
            </div>
        )
    }

}
export default Welcome;