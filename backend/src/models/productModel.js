const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = model("Products", ProductSchema);

module.exports = ProductModel;
