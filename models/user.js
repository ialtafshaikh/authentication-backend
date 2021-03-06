const uniquid = require("uniquid");

class User {
  constructor(email, hash, firstName, lastName, username) {
    this.userID = uniquid();
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = hash;
    this.createdAt = Date();
  }
}

module.exports = User;
