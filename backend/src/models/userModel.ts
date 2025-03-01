const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("Users", UserSchema);

module.exports = UserModel;
