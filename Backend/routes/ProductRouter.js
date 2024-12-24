const express = require("express");
const ensureAuthenticated = require("../middlewares/authenticated");
const { getAllProducts, addNewProduct } = require("../controllers/productController"); // Correctly import both controllers
const { uploadSingle } = require("../middlewares/multerMiddleware");
const router = express.Router();

// Route to get all products (requires authentication)
router.get("/getAllProducts", ensureAuthenticated, getAllProducts);

// Route to add a new product
router.post("/addProducts", uploadSingle , addNewProduct);

module.exports = router;
