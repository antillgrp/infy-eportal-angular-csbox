var express = require("express");
var routing = express.Router();
var EmployeeDAL = require("../public/javascripts/EmployeeDAL");
var LoginDAL = require("../public/javascripts/LoginDAL");

// login
routing.post("/login", function (req, res, next) {
  let login = { username: req.body.username, password: req.body.password };
  console.log(JSON.stringify(login));
  LoginDAL.login(login)
    .then((data) => {
      if (data) {
        res.json({ message: true });
      } else {
        res.json({ message: data.message });
      }
    })
    .catch((error) => {
      res.json({ message: false });
    });
});

routing.get("/getallEmployee", function (req, res, next) {
  //console.log(req.server);
  EmployeeDAL.getAllBookingId()
    .then(function (bookings) {
      res.json(bookings);
    })
    .catch(function (err) {
      next(err);
    });
});

routing.get("/employee/:empID", function (req, res, next) {
  EmployeeDAL.retrieveEmployee(req.params.empID)
    .then(function (employee) {
      res.json(employee);
    })
    .catch(function (err) {
      next(err);
    });
});

routing.post("/addEmployee", function (req, res, next) {
  EmployeeDAL.retrieveEmployee(req.body.empId)
    .then(function (emp) {
      res
        .status(require("http-status-codes").BAD_REQUEST)
        .json("Employee with ID: " + emp.empId + " already exists");
    })
    .catch(function (retrieveError) {
      // console.log(
      //   "------------------------------------\n" +
      //   "[" + (new Date()).toLocaleTimeString() + "]" +
      //   '[ERROR: retrieveError]routing.post("/addEmployee":\n'
      // );
      // console.log(retrieveError);
      var employee = {
        empId: Number(req.body.empId),
        empName: req.body.empName,
        empLocation: req.body.empLocation,
        jobLevel: req.body.jobLevel,
        onSite: true,
        emailId: req.body.emailId,
        skills: ["HTML5", "CSS3", "Javascript"],
        gender: req.body.gender,
        yearOfExperience: req.body.yearOfExperience,
        noOfProjectsWorked: req.body.noOfProjectsWorked,
        phoneNo: req.body.phoneNo,
        manager: "john"
      };
      EmployeeDAL.addNewEmployee(employee)
        .then(function (empId) {
          if (empId && empId === employee.empId) {
            res.status(require("http-status-codes").CREATED).json(empId);
          }
        })
        .catch(function (insertError) {
          // console.log(
          //   "------------------------------------\n" +
          //   "[" + (new Date()).toLocaleTimeString() + "]" +
          //   '[ERROR: insertError]routing.post("/addEmployee":\n'
          // );
          // console.log(insertError);
        });
    });
});

module.exports = routing;
