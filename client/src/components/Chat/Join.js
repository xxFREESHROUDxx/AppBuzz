import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';
import Rooms from './Rooms';

export default function Join() {
  const username = localStorage.getItem("username") || '';
  const rooms =JSON.parse(localStorage.getItem("rooms")) || [];
  const [name, setName] = useState(username);
  const [room, setRoom] = useState('');
  
  const setRoomAndUsername = (name,room) =>{
    let newRooms = [];
    if (username==='') {
      localStorage.setItem("username",name);
    }
    
       newRooms = [...rooms,{id: Date.now(), name: room}];
       localStorage.setItem("rooms",JSON.stringify(newRooms));
   
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <div className="container mt-2">
      <h3>Racently Joined Rooms</h3><hr />
      {rooms.map((room, i) => <div className="room_wrap" key={i}><Rooms room={room} user={name} /></div>)}
      </div>
        <h1 className="heading">Join</h1>
        {(username==='') ? <div>
          <input placeholder="Name" className=" form-control joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div> : null}
        <div>
          <input placeholder="Room" className=" form-control joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : setRoomAndUsername(name,room) } to={`/messages?name=${name}&room=${room}`}>
          <button className={'button btn btn-dark mt-20'} type="submit">Create & Join</button>
        </Link>
      </div>
    </div>
  );
}
