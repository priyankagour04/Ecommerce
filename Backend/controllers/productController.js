import ProductModel from "../models/product.js";  // Import the Product model (ensure the path ends with .js)
import uploadOnCloudinary from "../utils/cloudinary.js"; // Import the upload function for Cloudinary
import multer from "multer";  // Import multer
// Optional: Define custom ApiError class or adjust the way errors are handled (I'm assuming it's already implemented)

// Controller for fetching all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();  // Fetch all products
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

// Initialize Multer middleware to handle file uploads
const upload = multer({ dest: "../public/temp" });

// Controller for adding a new product
export const addNewProduct = async (req, res) => {
  try {
    const { name, price, stock, description, category } = req.body;

    if (!name || !price || !stock || !description || !category) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: name, description, price, image, category, and stock.",
      });
    }

    // Get the uploaded image local path from the files (Multer will place files here)
    const imageLocalPath = req.files?.image[0]?.path;
    console.log(req.files)
    if (!imageLocalPath) {
      return res.status(404).json({
        success: false,
        message:
          "image not found",
      });
    }

    // Upload the image to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(imageLocalPath);  // Ensure this function uploads the image correctly

    if (!cloudinaryResponse.url) {
      return res.status(404).json({
        success: false,
        message:
          "url not found",
      });
    }

    // Create a new product
    const newProduct = new ProductModel({
      name,
      price,
      description,
      image: cloudinaryResponse.url, // Store the image URL
      category,
      stock,
    });
        
    await newProduct.save();
    console.log(newProduct)

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
};
