const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

// router.param('productId', productController.productById);

// router
//   .route("/")
//   .get(productController.getAllProducts)
//   .post(productController.validateBody, productController.createProduct);

// router
//   .route("/:productId")
//   .get(productController.getProductById)
//   .post(productController.updateProduct)
//   .delete(productController.deleteProduct);

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
