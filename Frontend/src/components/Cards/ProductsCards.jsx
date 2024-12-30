import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../api/productApi";

// ProductCard Component
const ProductCard = ({ imgSrc, title, price, description, stock }) => {
  return (
    <div className="relative shadow-lg bg-stone-100">
      <div className="xl:flex lg:flex md:flex  md:h-96 ">
        {/* Product Image */}
        <div className="xl:w-1/2 lg:1/2 md:1/2 sm:w-1/2">
          <img
            src={imgSrc} 
            alt={title}
            className=" h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 p-6 justify-center object-cover ">
          {/* Rating */}
          <div className="flex mb-3">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarBorder key={index} className="text-yellow-400" />
            ))}
          </div>

          {/* Title */}
          <p className="text-lg font-semibold text-gray-800 mb-2">{title}</p>

          {/* Price */}
          <p className="text-xl font-semibold text-red-600 mb-1">Rs. {price}</p>

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
console.log(data);
  // Handle loading and error states
  if (isLoading)
    return <div className="text-center py-8 text-gray-600">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-8 text-red-500">
        Error fetching products!
      </div>
    );

    const reversedProducts = [...(data?.data || [])].reverse();

  return (
    <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 xl:px-20 lg:px-6 md:p-10 py-8">
      {reversedProducts.map((product) => (
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
