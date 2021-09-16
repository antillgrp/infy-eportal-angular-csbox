var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes/Routing");
var cors = require("cors");
var myErrorLogger = require("./public/javascripts/ErrorLogger");
var myRequestLogger = require("./public/javascripts/RequestLogger");

var app = express();

//https://expressjs.com/en/resources/middleware/cors.html#usage
//Enable All CORS Requests
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.use(myErrorLogger);
app.use(myRequestLogger);
//app.use(require("morgan")("combined"));

//https://stackoverflow.com/a/60373143
//app.listen(1020);

//var listener =
app.listen(4000, function () {
  console.log("IP:" + require("ip").address());
});

// {
//   "/api/*": {
//     "target": "http://localhost:4000",
//     "secure": false,
//     "logLevel": "debug",
//     "changeOrigin": true,
//     "pathRewrite": { "^/api": "" } // needed if you want to change api to empty when calling your backend service
//   }
// }
