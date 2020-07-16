const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io').listen(server);
const io = socketio;
// app.get("/socket.io/",()=> { return console.log('ppp') });
// console.log(io)

// const compression = require("compression");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const subscriptionHandler = require('./subscriptionHandler');


// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json');

const path = require("path");
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');


app.use(cors());
app.use(router);




//serve static asset 
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
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
// app.post("/subscriptionpost", subscriptionHandler.sendPushNotification);

module.exports = app;
