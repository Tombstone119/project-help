const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/products").get(getAllProducts).post(createProduct);

router
  .route("/products/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
