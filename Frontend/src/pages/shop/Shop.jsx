import React, { useState } from 'react';
import ShopBanner from '../../assets/images/ShopBanner.png';
import ProductsCards from '../../components/Cards/ProductsCards';
import Pagination from '../../components/pagination/Pagination'; // Import Pagination component

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="relative bg-no-repeat mt-2 bg-center h-96" style={{ backgroundImage: `url(${ShopBanner})` }}>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-4xl font-bold mb-2">Shop Here</p>
          <p className="text-xl">Let’s design the place you always imagined.</p>
        </div>
      </div>

      {/* Pass currentPage and itemsPerPage to ProductsCards */}
      <ProductsCards currentPage={currentPage} itemsPerPage={itemsPerPage} /> 

      {/* Render Pagination component */}
      {/* Assuming ProductsCards component provides totalPages */}
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} /> 
    </>
  );
};

export default Shop;