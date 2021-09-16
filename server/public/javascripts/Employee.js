
// bean class of Employee

var Employee = function (empId, empName, empLocation, jobLevel, onSite, emailId, skills, gender, yearOfExperience, noOfProjectsWorked, phoneNo) {
    this.empId = empId;
    this.empName = empName;
    this.empLocation = empLocation;
    this.jobLevel = jobLevel;
    this.onSite = onSite;
    this.emailId = emailId;
    this.skills = skills;
    this.gender = gender;
    this.yearOfExperience = yearOfExperience;
    this.noOfProjectsWorked = noOfProjectsWorked;
    this.phoneNo = phoneNo;
}

Employee.toObject = function (result) {
    return new Employee(result.empId, result.empName, result.empLocation, result.jobLevel, result.onSite, result.emailId, result.skills, result.gender, result.yearOfExperience, result.noOfProjectsWorked, result.phoneNo);
}


module.exports = Employee;