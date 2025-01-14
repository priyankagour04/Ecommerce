import React, { useState } from "react";
import { useAddToCartMutation } from "../../api/cartApi";
import { handleSuccess } from "../../utils/Toastify.Utils";

const AddToCartBtn = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [addToCart, { isLoading, error, data }] = useAddToCartMutation();

  // Handle the quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No user ID found. Make sure the user is logged in.");
      return; // If there's no user ID, don't send the request
    }

    // Debugging payload being sent
    console.log(
      "Adding to cart with userId:",
      userId,
      "productId:",
      product._id,
      "quantity:",
      quantity
    );

    try {
      await addToCart({ userId, productId: product._id, quantity }).unwrap();
      handleSuccess(data.message);
      console.log("Product added to cart!");
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <div >
      <div className="flex space-x-2 mt-2">
        <label>Quantity:</label>
        
      </div>

      <button
        onClick={handleAddToCart}
        className="px-6 py-2 mb-5 bg-black text-white font-semibold rounded hover:bg-gray-800"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add to Cart"}
        {error && <div className="text-red-500 mt-2">{error.message}</div>}
        {data && (
          <div className="text-green-500 mt-2">Product added to cart!</div>
        )}
      </button>
    </div>
  );
};

export default AddToCartBtn;
