import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ShopNow = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigate = () => {
    navigate("/shop"); // Redirect to the "shop" route
  };

  return (
    <div>
      <button
        className="flex items-center font-semibold gap-4 "
        onClick={handleNavigate} // Attach the navigation logic
      >
        Shop Now <FaArrowRightLong />
      </button>
      <div className="border-t border-black w-28"></div>
    </div>
  );
};

export default ShopNow;
