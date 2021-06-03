const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "User Must have username"],
    unique: true,
    required: true
  },
  password: {
    type: String,
    require: [true, "user must have a password"],
    required: true
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
