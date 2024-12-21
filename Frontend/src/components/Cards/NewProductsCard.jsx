import React from "react";
import sofa from "../../assets/images/luxurySingle-Sofa.jpg";

const NewProductsCard = () => {
  return (
    <div className="relative xl:w-1/4 lg:1/4 md:1/2 sm:w-1/2 group mt-6">
      {/* Product Image */}
      <img
        src={sofa}
        alt="Luxury Sofa"
        className="w-full h-full object-cover "
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-end  justify-center  bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="px-6 py-2 mb-5 bg-black text-white font-semibold rounded hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default NewProductsCard;
