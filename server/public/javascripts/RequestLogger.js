var fs = require("fs");

var RequestLogger = function (req, res, next) {
  var logMessage =
    "" +
    new Date() +
    "\n---\nreq.ips: " +
    req.ips +
    "\n---\nreq.method: " +
    req.method +
    "\n---\nreq.url: " +
    req.url +
    "\n---\nreq.body: " +
    JSON.stringify(req.body) +
    "\n---\nreq.params: " +
    JSON.stringify(req.params) +
    "\n---\n";
  console.log(logMessage);
  fs.appendFile("RequestLogger.log", logMessage, function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
  });
  next();
};

module.exports = RequestLogger;
