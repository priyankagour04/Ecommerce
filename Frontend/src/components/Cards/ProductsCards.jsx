import React, { useState } from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../api/productApi";

// ProductCard Component
const ProductCard = ({ imgSrc, title, price, description, stock }) => {
  return (
    <div className="relative shadow-lg bg-stone-100">
      <div className="xl:flex lg:flex md:flex flex  md:h-96 ">
        <div className="xl:w-1/2 lg:1/2 md:1/2 sm:w-1/2 w-1/2">
          <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 w-1/2 p-6 justify-center object-cover ">
          <div className="flex mb-3">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarBorder key={index} className="text-yellow-400" />
            ))}
          </div>
          <p className="lg:text-lg xl:text-lg md:text-xl text-sm font-semibold text-gray-800 mb-2">
            {title}
          </p>
          <p className="lg:text-xl xl:text-xl md:text-xl text-sm font-semibold text-red-600 mb-1">
            Rs. {price}
          </p>
          <p className="text-sm text-gray-500">Stock: {stock}</p>
          <p className="text-sm hidden lg:block xl:block md:block text-gray-600 mt-4 mb-4">
            {description}
          </p>
          <button className="w-full lg:mt-0 xl:mt-0 md:mt-0 mt-5 py-2 px-4 bg-black text-white lg:text-sm xl:text-sm md:text-sm text-xs font-medium rounded-md hover:bg-gray-700">
            Add to Cart
          </button>
          <div className="mt-3 text-center items-center justify-center gap-2 flex">
            <FaRegHeart className="hover:text-red-500 cursor-pointer" />
            <h1>Wishlist</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ProductsCards Component
const ProductsCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [page, setPage] = useState(1);
  const limit = 10; // Products per page

  const { data, isLoading, isError } = useGetAllProductsQuery({ page, limit });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (isError) return <div className="text-center py-8 text-red-500">Error!</div>;

  const filteredProducts = (data?.data || []).filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" ||
      (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());

    const isPriceMatch =
      selectedPriceRange === "All" ||
      (() => {
        const price = product.price || 0;
        switch (selectedPriceRange) {
          case "0-500":
            return price >= 0 && price <= 500;
          case "501-1000":
            return price > 500 && price <= 1000;
          case "1001-5000":
            return price > 1000 && price <= 5000;
          case "5001-10000":
            return price > 5000 && price <= 10000;
          case "10000+":
            return price > 10000;
          default:
            return true;
        }
      })();

    return isCategoryMatch && isPriceMatch;
  });

  const categories = [...new Set((data?.data || []).map((product) => product.category))];
  const totalPages = data?.totalPages || 1;

  return (
    <>
      {/* Dropdown Filters */}
      <div className="container mx-auto mt-6 xl:px-20 px-4 gap-4 lg:px-6 md:px-10 md:gap-10 flex items-center lg:gap-5">
        <div>
          <label htmlFor="category-select" className="block mb-2 font-medium text-gray-400">
            CATEGORIES
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-2 px-4 border rounded-md text-sm"
          >
            <option value="All">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price-select" className="block mb-2  font-medium text-gray-400">
            PRICE
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="py-2 text-sm px-4 border rounded-md"
          >
            <option value="All">All Prices</option>
            <option value="0-500">0 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001-5000">1001 - 5000</option>
            <option value="5001-10000">5001 - 10000</option>
            <option value="10000+">10000+</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 xl:px-20 lg:px-6 md:p-10 px-4 py-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            imgSrc={product.image}
            title={product.name}
            price={product.price}
            description={product.description}
            stock={product.stock}
          />
        ))}
      </div>
      <div className="container mx-auto flex justify-center items-center py-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Previous
        </button>
        <span className="mx-2 font-medium">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={page === totalPages}
          className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductsCards;
