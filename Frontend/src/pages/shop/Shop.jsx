import React from 'react';
import ShopBanner from '../../assets/images/ShopBanner.png';
import ProductsCards from '../../components/Cards/ProductsCards';

const Shop = () => {
  return (
   <>
     <div className="relative bg-no-repeat mt-2 bg-center h-96" style={{ backgroundImage: `url(${ShopBanner})` }}>
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold mb-2">Shop Here</p>
        <p className="text-xl">Let’s design the place you always imagined.</p>
      </div>
    </div>

    <ProductsCards/>
   </>

    
  );
};

export default Shop;
