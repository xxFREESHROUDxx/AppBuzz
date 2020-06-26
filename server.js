const app = require("./src/app");
const path = require("path");

//serve static asset 
if(process.env.NODE_ENV==="production"){

  app.use(express.static('client/build'));
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || "localhost";

// Launch Node.js server
const server = app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

function handleExit(err) {
  if (err) {
    errors.report(err);
  }
  if (options.exit) {
    process.exit();
  }
}

process.on("exit", handleExit.bind(null));
process.on("SIGINT", handleExit.bind(null));
process.on("SIGTERM", handleExit.bind(null));
process.on("uncaughtException", handleExit.bind(null));
