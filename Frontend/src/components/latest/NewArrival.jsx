import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../api/productApi"; // Assuming the API is already set up

const NewArrival = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(); // Fetching data from API
  const [latestProducts, setLatestProducts] = useState([]);

  // Effect to extract the last 5 most recent products
  useEffect(() => {
    if (Array.isArray(data?.data)) {
      // Reverse the array and slice the last 5 products
      const sortedProducts = data.data
        .slice()
        .reverse() // Reverse the products array to show newest items first
        .slice(0, 5); // Take the last 5 products
      setLatestProducts(sortedProducts); // Update state with the latest 5 products
    }
  }, [data]); // Dependency on `data`, so it reruns when data changes

  return (
    <div className="my-10 container mx-auto xl:px-16">
      <h1 className="text-4xl font-semibold mb-6">New Arrivals</h1>

      {/* Display Loading, Error, or Products */}
      {isLoading && <p>Loading new products...</p>}
      {isError && <p className="text-red-500">Failed to load new products.</p>}
      {!isLoading && latestProducts.length === 0 && (
        <p>No new products found.</p>
      )}

      {/* Products Grid */}
      <div className="flex gap-6">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="relative group mt-6 xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-end justify-center bg-gray-900 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 mb-5 bg-black text-white font-semibold rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
