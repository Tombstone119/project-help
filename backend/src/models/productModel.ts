import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    required: true,
    enum: [
      "Herbal Supplements",
      "Ayurvedic Oils",
      "Personal Care Products",
      "Ayurvedic Teas and Beverages",
      "Ayurvedic Medicines",
    ],
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 1,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      comment: { type: String, required: true },
      rating: { type: Number, min: 0, max: 5, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = model("Products", ProductSchema);
export default ProductModel;
