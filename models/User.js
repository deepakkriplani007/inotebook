const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// below line not under stand
const User = mongoose.model("user", UserSchema);
User.createIndexes();

module.exports = mongoose.model("user", UserSchema);
