import React, { Component } from "react";
import { Link} from "react-router-dom";


class Welcome extends Component{
    render(){
        return(
            <div>
            <div className="welcome-wrapper">
            <main className="container welcome m-auto">
            <Link to={'/todo'}> <i className="fas fa-clipboard-list"></i><br />Todo</Link>
            <Link to={'/chat'}> <i className="fas fa-comment-alt"></i><br />chat</Link>
            <Link to={'/music'}> <i className="fas fa-music"></i><br />music</Link>
            <Link to={'/news'}> <i className="far fa-newspaper"></i><br />news</Link>
            <Link to={'/quotes'}>quotes</Link>
            <Link to={'/weather'}>weather</Link>
            <Link to={'/books'}>books</Link>
            </main>
            </div>
            </div>
        )
    }

}
export default Welcome;