import Cart from "../models/cartModel.js";
import Product from "../models/product.js"; // Product model to access product details

const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;  // Extracting data from the request body

    // Step 1: Validate if all required fields are provided in the request
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "User ID, product ID, and quantity are required" });
    }

    // Step 2: Check if the product exists in the database
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Step 3: Check if the user already has a cart in the database
    let cart = await Cart.findOne({ userId: userId });

    // If the user doesn't have a cart, create a new one and add the product
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{
          productId,
          quantity,
          totalPrice: product.price * quantity
        }]
      });

      // Save the new cart to the database
      await cart.save();
      return res.status(201).json({ message: "Cart created and product added", cart });
    }

    // Step 4: If cart exists, check if the product is already in the cart
    const existingProduct = cart.items.find(item => item.productId.toString() === productId);

    if (existingProduct) {
      // If product is already in the cart, update the quantity and total price
      existingProduct.quantity += quantity;
      existingProduct.totalPrice = existingProduct.quantity * product.price;
    } else {
      // If the product is not in the cart, add it to the cart
      cart.items.push({
        productId,
        quantity,
        totalPrice: product.price * quantity
      });
    }

    // Save the updated cart with new/updated product
    await cart.save();
    return res.status(200).json({ message: "Product added to cart successfully", cart });

  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default addToCart;
