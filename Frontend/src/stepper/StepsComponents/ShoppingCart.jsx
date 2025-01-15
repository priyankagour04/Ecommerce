import React, { useState } from "react";

const ShoppingCart = ({handleNext} ) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      name: "Tray Table",
      color: "Black",
      price: 19.0,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      name: "Tray Table",
      color: "Red",
      price: 19.0,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      name: "Table Lamp",
      color: "Gold",
      price: 39.0,
      quantity: 1,
    },
  ]);

  const [selectedShipping, setSelectedShipping] = useState("Free Shipping");

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceed to the next step!");
    console.log("Selected Shipping Method:", selectedShipping);
  };

  return (
    <div className="container mx-auto justify-center xl:flex lg:flex md:gap-3">
      <div className="overflow-x-auto p-3">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left w-3/5">Product</th>
              <th className="px-4 py-2 text-center w-2/5">Quantity</th>
              <th className="px-4 py-2 text-center w-2/5">Price</th>
              <th className="px-4 py-2 text-center w-2/5">Subtotal</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex items-center justify-center border rounded-md">
                    <button
                      className="px-2 py-1 hover:bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.id, false)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 hover:bg-gray-300 rounded"
                      onClick={() => handleQuantityChange(item.id, true)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2 text-center">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="px-4 py-1 text-red-500 hover:text-white hover:bg-red-600 rounded"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-80 max-w-sm p-4 border rounded-md">
        <h3 className="font-semibold text-xl mb-4">Cart Summary</h3>
        <div className="space-y-3">
          <div
            className={`p-3 border rounded-md ${
              selectedShipping === "Free Shipping" ? "border-black" : ""
            }`}
          >
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="shipping"
                value="Free Shipping"
                checked={selectedShipping === "Free Shipping"}
                onChange={() => setSelectedShipping("Free Shipping")}
              />
              <span>Free Shipping: $0.00</span>
            </label>
          </div>
          <div
            className={`p-3 border rounded-md ${
              selectedShipping === "Express Shipping" ? "border-black" : ""
            }`}
          >
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="shipping"
                value="Express Shipping"
                checked={selectedShipping === "Express Shipping"}
                onChange={() => setSelectedShipping("Express Shipping")}
              />
              <span>Express Shipping: +$15.00</span>
            </label>
          </div>
          <div
            className={`p-3 border rounded-md ${
              selectedShipping === "Pick Up" ? "border-black" : ""
            }`}
          >
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="shipping"
                value="Pick Up"
                checked={selectedShipping === "Pick Up"}
                onChange={() => setSelectedShipping("Pick Up")}
              />
              <span>Pick Up: $21.00</span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="flex justify-between text-gray-500">
            <span>Sub Total:</span>
            <span>
              $
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
          <hr className="my-4" />
          <p className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>
              $
              {(
                cartItems.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                ) +
                (selectedShipping === "Express Shipping"
                  ? 15
                  : selectedShipping === "Pick Up"
                  ? 21
                  : 0)
              ).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="mt-6">
          <button
            className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
            onClick={handleNext}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
