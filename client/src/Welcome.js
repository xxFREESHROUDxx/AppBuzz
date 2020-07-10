import React, { Component } from "react";
import { Link} from "react-router-dom";


class Welcome extends Component{
    render(){
        return(
            <div>
            <div className="welcome-wrapper">
            <main className="container welcome">
            <Link to={'/todo'}>Todo</Link>
            <Link to={'/chat'}>chat</Link>
            <Link to={'/music'}>music</Link>
            <Link to={'/news'}>news</Link>
            <Link to={'/quotes'}>quotes</Link>
            </main>
            </div>
            </div>
        )
    }

}
export default Welcome;