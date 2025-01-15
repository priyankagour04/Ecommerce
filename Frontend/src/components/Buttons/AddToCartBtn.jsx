import React, { useState } from "react";
import { useAddToCartMutation } from "../../api/cartApi";
import { handleSuccess } from "../../utils/Toastify.Utils";

const AddToCartBtn = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [addToCart, { isLoading, error }] = useAddToCartMutation();

  // Handle the quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No user ID found. Make sure the user is logged in.");
      return;
    }

    try {
      const response = await addToCart({
        userId,
        productId: product._id,
        quantity,
      }).unwrap();

      // Display success toast with the message from the response
      handleSuccess(response.message || "Product added to cart!");
      console.log("Product added to cart!", response);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <div>
      <div className="flex space-x-2 mt-2">
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="border rounded px-2 py-1"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="px-6 py-2 mb-5 bg-black text-white font-semibold rounded hover:bg-gray-800"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add to Cart"}
      </button>
      {error && <div className="text-red-500 mt-2">{error.message}</div>}
    </div>
  );
};

export default AddToCartBtn;
