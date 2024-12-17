const ProductModel = require("../models/product"); // Import the Product model

// Controller for fetching all products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find(); // Fetch all products
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};

module.exports = getAllProducts;
