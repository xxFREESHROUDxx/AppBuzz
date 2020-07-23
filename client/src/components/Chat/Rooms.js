import React from 'react';
import "./Room.css";

const Rooms = ({ room, user }) => {
//    console.log(article);
   return(
       <div className="row text-justify mt-2">
           <div className="col-8">
                <h4><i className="fab fa-stack-exchange"></i> { room.name.toUpperCase() }</h4>
           </div>
           <div className="col-4">
               <a href={`/messages?name=${user}&room=${room.name}`} className="btn btn-dark btn-sm"><i className="fas fa-sign-in-alt"></i></a>
           </div>
       </div>
   );
}

export default Rooms;