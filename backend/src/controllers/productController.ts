import Product from "../models/productModel.ts";
import HttpStatusCodes from "../util/HttpStatusCodes.ts";
import productServices from "../services/productServices.ts";
import { Response, Request } from "express";

export const getAllProducts = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const allProducts = await productServices.getAll();
    res.status(HttpStatusCodes.OK).json({
      success: true,
      products: allProducts,
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await productServices.findById(id);
    if (!product) {
      res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ message: "Product not found." });
    }
    res.status(HttpStatusCodes.OK).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = await productServices.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      images: req.body.images,
      ratings: req.body.ratings,
      reviews: req.body.reviews,
    });
    res.status(HttpStatusCodes.CREATED).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const updatedProduct = await productServices.update({
      id,
      product: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock,
        images: req.body.images,
        ratings: req.body.ratings,
        reviews: req.body.reviews,
      },
    });

    res.status(HttpStatusCodes.OK).json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedProduct = await productServices.findAndDelete(id);
    if (!deletedProduct) {
      res
        .status(HttpStatusCodes.NOT_FOUND)
        .json({ message: "Product not found." });
    }
    res.status(HttpStatusCodes.OK).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal Server Error...",
    });
  }
};
