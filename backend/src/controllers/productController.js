const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      products: allProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();
    res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category },
      { new: true }
    );
    res.status(200).json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
