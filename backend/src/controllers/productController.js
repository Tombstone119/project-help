const Product = require("../models/productModel");

const getAllProducts = async (_, res) => {
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

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({
      success: true,
      product,
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
    const {
      name,
      description,
      price,
      category,
      stock,
      images,
      ratings,
      reviews,
    } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      images,
      ratings,
      reviews,
    });
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
    const {
      name,
      description,
      price,
      category,
      stock,
      images,
      ratings,
      reviews,
    } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category, stock, images, ratings, reviews },
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
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
