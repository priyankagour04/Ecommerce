// here we are creating schema for users to login

const { types } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
