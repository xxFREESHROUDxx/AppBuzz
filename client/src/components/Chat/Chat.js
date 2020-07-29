import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from './TextContainer';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';
import http from "../../utils/http";
import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  // const [users_count, setUsersCount] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState('')
  const ENDPOINT = http.host;


  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT,{
      path: '/socket'
    });
    console.log(socket)
    setRoom(room);
    setName(name);
   
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
        setTyping(null);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
      // setUsersCount(users.length);
    });
  },[]);
useEffect(()=> {
    socket.on('display', (data)=>{
      if(data.typing===true){
        const trimmedName = data.user.trim().toLowerCase();
          if(name === trimmedName) {
            setTyping(null);
          }else{
            setTyping(data.user);
          }
      }   
    });

});

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const sendTyping = () =>{
    // event.preventDefault();
    
    socket.emit('sendTyping',{user:name, typing:true});
  }

  return (
    <div className="outerContainer">
      <div className="w-100 m-0 p-0">
          <InfoBar room={room} typing={typing} user={name} recip={users} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} sendTyping={sendTyping}/>
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
