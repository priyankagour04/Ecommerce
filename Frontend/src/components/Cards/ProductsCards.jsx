import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../api/productApi";

// ProductCard Component
const ProductCard = ({ imgSrc, title, price, description, stock }) => {
  return (
    <div className="relative xl:p-6 lg:p-6 ">
      <div className="xl:flex lg:flex md:flex">
        {/* Product Image */}
        <div className="xl:w-1/2 lg:1/2 md:1/2 sm:w-1/2 ">
          <img
            src={imgSrc} 
            alt={title}
            className="w-full h-full bg-gray-100 p-6 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 p-6 my-5">
          {/* Rating */}
          <div className="flex mb-3">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarBorder key={index} className="text-yellow-400" />
            ))}
          </div>

          {/* Title */}
          <p className="text-lg font-semibold text-gray-800 mb-2">{title}</p>

          {/* Price */}
          <p className="text-xl font-semibold text-red-600 mb-1">${price}</p>

          {/* Stock */}
          <p className="text-sm text-gray-500">Stock: {stock}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-4 mb-4">{description}</p>

          {/* Add to Cart Button */}
          <button className="w-full py-2 px-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-700">
            Add to Cart
          </button>

          {/* Wishlist */}
          <div className="mt-3 text-center items-center justify-center gap-2 flex">
            <FaRegHeart className=" hover:text-red-500  cursor-pointer" />
            <h1>Wishlist</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ProductsCards Component
const ProductsCards = () => {
  // Fetch products using RTK Query
  const { data, isLoading, isError } = useGetAllProductsQuery();

  // Handle loading and error states
  if (isLoading)
    return <div className="text-center py-8 text-gray-600">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-8 text-red-500">
        Error fetching products!
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-24 lg:px-0 md:p-5 md:space-y-5 py-8">
      {data?.data?.map((product) => (
        <ProductCard
          key={product._id}
          imgSrc={product.image} // Dynamic image path
          title={product.name}
          price={product.price}
          description={product.description}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ProductsCards;
