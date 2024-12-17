const express = require("express");
const ensureAuthenticated = require("../middlewares/authenticated");
const getAllProducts = require("../controllers/productController");
const router = express.Router();

router.get("/getAllProducts", ensureAuthenticated, getAllProducts);

module.exports = router;