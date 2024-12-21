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

  const addNewProduct = async (req, res)=>{
    const { name,  price, stock ,description, image, category  } = req.body;

    if (!name || !price || !stock || !description ||  !image || !category  ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: name, description, price, image, category, and stock.",
      }); 
    }

    try {
    

      const newProduct = new ProductModel({
        name,
        price,
        description,
        image,
        category,
        stock,
      });

      await newProduct.save();

      // Respond with a success message
      res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: newProduct,
      });

      
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error adding product",
        error: error.message,
      });
    }
  }

  module.exports = { getAllProducts, addNewProduct };
