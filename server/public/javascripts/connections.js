//Management
//https://cloud.mongodb.com/v2/6140eed2e5e724660c09da5f#clusters

var MongoClient = require("mongodb");

const uri =
  "mongodb+srv://admin:admin123@cluster0.nyip3.mongodb.net/EPORTAL_DB?retryWrites=true&w=majority";

//var url = "mongodb://localhost:27017/EPORTAL_DB";

//https://mongodb.github.io/node-mongodb-native/api-generated/collection.html?highlight=findone#findOne

//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var connection = {};

connection.getConnection = function () {
  return MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(function (mongoDriver) {
      return mongoDriver.db();
    })
    .catch(function (error) {
      throw new Error("Could not connect to Database");
    });
};

module.exports = connection;

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:<password>@cluster0.nyip3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
