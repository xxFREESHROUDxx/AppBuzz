import React from 'react';
import "./Quote.css";

const Quote = ({ item, i }) => {
//    console.log(article);
   return(<div className="card mt-5">
        <div className="card-body">
            <h4 className="mt-4">{item.text}</h4>
        </div>
        <div className="card-footer d-block w-100 px-2">
            <span className="w-50 f-right"> - { item.author || "unknown" }</span>
        </div>
    </div>);
}

export default Quote;