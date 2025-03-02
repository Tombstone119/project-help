import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController.ts";

router.route("/products").get(getAllProducts).post(createProduct);

router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
