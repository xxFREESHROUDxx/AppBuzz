import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className=" form-control joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className=" form-control joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/messages?name=${name}&room=${room}`}>
          <button className={'button btn btn-dark mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
