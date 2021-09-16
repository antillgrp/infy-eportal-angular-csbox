var Users = function (username, password) {
    this.username = username;
    this.password = password;
}

Users.toObject = function (obj) {
    return new Users(obj.username, obj.password);
}

module.exports = Users;