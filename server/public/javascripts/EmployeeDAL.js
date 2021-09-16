var connection = require('./connections');
var Employee = require('./Employee');

var EmployeeDAL = {};

EmployeeDAL.getAllBookingId =function() {
  return connection.getConnection().then(function (db) {
      return db.collection("Employees").find().toArray().then(function(empDetails){
          return empDetails;
      }).catch(function(err){
          return err;
      });
  });
};

EmployeeDAL.retrieveEmployee = function (empId) {
  return  connection
          .getConnection()
          .then(function (db) {
            return  db
                    .collection("Employees")
                    .findOne({ "empId": Number(empId) })
                    .then(                      
                      function (saved) {
                        if (saved)
                          return Promise.resolve(
                            Employee.toObject(saved)
                          );
                        else 
                          return Promise.reject(
                            new Error("No record with this emp Id: " + empId)
                          );
                      }
                    );
          });
};
// db.Employees.createIndex( { "empId" : 1 }, { unique : true } );
// Optional. Creates a unique index so that the collection will not
// accept insertion or update of documents where the index key value
// matches an existing value in the index.
// EmployeeDAL.findEmployee = function(empId) {
//   var empFound;
//   connection
//   .getConnection()
//   .then(function (db) {
//     db
//     .collection("Employees")
//     .findOne(
//       {empId: Number(empId)},
//       function (err,found){
//         if(found && found.empId){          
//           console.log(
//             "------------------------------------\n" +
//             "[" + (new Date()).toLocaleTimeString() + "]" +
//             " EmployeeDAL.findEmployee:\n" + JSON.stringify(found)
//           );
//           empFound = found;
//           return;
//         }
//         //require('assert').equal(null, err);
//         if(err){
//           console.log(
//             "------------------------------------\n" +
//             "[" + (new Date()).toLocaleTimeString() + "]" +
//             "[ERROR]EmployeeDAL.findEmployee:\n" + JSON.stringify(err)
//           );
//           empFound = null;
//           throw err;
//         }
//       }
//     );
//     //   function (found) {
//     //   console.log(
//     //     "------------------------------------\n" +
//     //     "(" + (new Date()).toLocaleTimeString() + ")" +
//     //     " EmployeeDAL.findEmployee:\n" + JSON.stringify(found)
//     //   );
//     //   empFound = found;      
//     //   //if (saved != null)
//     //   //   throw new Error("Employee already present: " + employee.empName);
//     //   // else
//     //   //   return EmployeeDAL.addNewEmployee(employee);
//     // })
//     // .catch(function(err) {
//     //   console.log(
//     //     "(ERROR)EmployeeDAL.addNewEmployee: " + JSON.stringify(err)
//     //   );
//     //   empFound = null;
//     //   throw err;
//     // });
//   });
//   return empFound;
// };

EmployeeDAL.addNewEmployee = function(employee) {
  return  connection
          .getConnection()
          .then(function (db) {
            return  db
                    .collection("Employees")
                    .insertOne(employee)
                    .then(
                      function(insertOneWriteOpResult) {
                        // console.log(
                        //   "------------------------------------\n" +
                        //   "[" + (new Date()).toLocaleTimeString() + "]" +
                        //   "[SUCCESS]EmployeeDAL.addNewEmployee:\n" + JSON.stringify(insertOneWriteOpResult)
                        // );
                        return Promise.resolve(employee.empId);
                      }
                    )
                    .catch(
                      function(err) {
                        // console.log(
                        //   "------------------------------------\n" +
                        //   "[" + (new Date()).toLocaleTimeString() + "]" +
                        //   "[ERROR]EmployeeDAL.addNewEmployee:\n" + JSON.stringify(err)  
                        // );
                        return Promise.reject(err);
                      }
                    );
                      
          });
};

module.exports = EmployeeDAL;

