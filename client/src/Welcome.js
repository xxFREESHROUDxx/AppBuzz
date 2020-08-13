import React, { Component } from "react";
import { Link} from "react-router-dom";
import { Flip } from "react-awesome-reveal";

class Welcome extends Component{
    render(){
        return(
            <div>
                <div className="welcome-wrapper">
                    <main className="welcome row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/books'}> <i className="fas fa-book"></i><br />books</Link>
                            </Flip>
                        </div>   
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/currency'}> <i className="fas fa-money-bill-wave"></i><br />currency</Link>
                            </Flip>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/chat'}> <i className="fas fa-comment-alt"></i><br />chat</Link>
                            </Flip>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/news'}> <i className="far fa-newspaper"></i><br />news</Link>
                            </Flip>
                        </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/quotes'}> <i className="fas fa-bacon"></i><br/>quotes</Link>
                            </Flip>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                            <Flip direction="vertical">
                                <Link to={'/weather'}> <i className="fas fa-cloud"></i><br />weather</Link>
                            </Flip>
                        </div>
                    </main>
                </div>
            </div>
        )
    }

}
export default Welcome;