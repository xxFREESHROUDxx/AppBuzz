const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || "0.0.0.0";

const server = app.listen(port, host, () => {
  console.log('Port %d',port);
  console.log(`Node.js API server is listening on http://${host}`);
});

const socketio = require('socket.io')({
  path: '/socket'
});

const io = socketio.listen(server);

// const router = require('./src/router');
// console.log(io)

const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
// const subscriptionHandler = require('./subscriptionHandler');


// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json');

const path = require("path");
const { addUser, removeUser, getUser, getUsersInRoom } = require('./src/users');


console.log("here");

io.on('connect', (socket) => {
  console.log("user connected")
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    console.log("user dis")
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});


//serve static asset 
app.use(cors());
// app.use(router);
if(process.env.NODE_ENV==="production"){

  app.use(express.static('client/build'));
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

process.env.CORS_ORIGIN = "http://localhost:3000, https://webalarm.herokuapp.com";
app.use(
  cors({
    origin(origin, cb) {
      const whitelist = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : [];
      cb(null, whitelist.includes(origin));
    },
    credentials: true
  })
);


// Launch Node.js server



function handleExit(err) {
  if (err) {
    console.log(err);
  }
  if (options.exit) {
    process.exit();
  }
}

process.on("exit", handleExit.bind(null));
process.on("SIGINT", handleExit.bind(null));
process.on("SIGTERM", handleExit.bind(null));
process.on("uncaughtException", handleExit.bind(null));
