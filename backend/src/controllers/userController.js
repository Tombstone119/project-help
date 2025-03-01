// models: Business logic, schema, validation, and data manipulation
// controllers: Application logic, request handling, response construction, and routing
// web api does not have views --->
// views: Presentation logic, UI/UX, and client-side validation

const data = {};
data.users = require("../models/test.json");

const getAllUsers = async (req, res) => {
  res.json(data.users);
};

const createNewUser = async (req, res) => {
  const newUser = req.body;
  data.users.push(newUser);
  res.status(201).json(newUser);
};
