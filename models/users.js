const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  date: Date,
  token: String,
});

module.exports = mongoose.model('users', usersSchema);