var Users = require("./Login");
var connection = require("./connections");

var LoginDAL = {};

LoginDAL.login = function (login) {
  return connection.getConnection().then(function (db) {
    console.log(db.collection("UserCredentials").Users);
    return db
      .collection("UserCredentials")
      .findOne({ username: login.username, password: login.password })
      .then(function (saved) {
        console.log(login);
        console.log(saved);
        if (!saved)
          throw new Error(
            "No record with this login username: " + login.username
          );
        else return Users.toObject(saved);
      });
  });
};

module.exports = LoginDAL;
