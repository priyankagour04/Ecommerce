import React, { useEffect, useState } from "react";
import { useGetNewProductsQuery } from "../../api/productApi";

const NewArrival = () => {
  const { data, isLoading, isError } = useGetNewProductsQuery();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(data?.data)) {
      console.log("Fetched products:", data.data);
      const sortedProducts = data.data
        .slice()
        .reverse()
        .slice(0, 5);
      setLatestProducts(sortedProducts);
    } else if (data) {
      console.error("Expected data.data to be an array:", data);
    }
  }, [data]);

  return (
    <div className="my-10 container mx-auto xl:px-16">
      <h1 className="text-4xl font-semibold mb-6">New Arrivals</h1>

      {isLoading && <p>Loading new products...</p>}
      {isError && <p className="text-red-500">Failed to load new products.</p>}
      {!isLoading && latestProducts.length === 0 && (
        <p>No new products found.</p>
      )}

      <div className="flex gap-6">
        {latestProducts.map((product) => (
          <div
            key={product._id || product.id || Math.random()} // Ensure unique key
            className="relative group mt-6 xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name || "Unnamed Product"}
                className="w-full h-full object-cover"
              />
            ) : (
              <p>No image available</p>
            )}

            <div className="absolute inset-0 flex items-end justify-center bg-gray-900 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 mb-5 bg-black text-white font-semibold rounded hover:bg-gray-800">
               View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
