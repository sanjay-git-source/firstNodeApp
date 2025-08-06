const mongoose = require("mongoose");
const userScheme = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model('Users',userScheme);

module.exports = Users;