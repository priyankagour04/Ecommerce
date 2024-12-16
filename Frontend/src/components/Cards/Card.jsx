import React from 'react';
import product1 from '../../assets/images/Product1.png';
import product2 from '../../assets/images/Product2.png';
import product3 from '../../assets/images/Product3.png';
import ShopNow from '../Buttons/ShopNow';

// Reusable ProductCard Component
const ProductCard = ({ imageSrc, title, textPosition }) => {
  return (
    <div className="relative">
      <img src={imageSrc} alt={title} className="w-full object-cover" />
      <div
        className={`absolute p-6 flex flex-col ${
          textPosition === 'top-left'
            ? 'top-4 left-4 items-start'
            : 'bottom-4 left-4 items-start'
        }`}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <ShopNow className="mt-4" />
      </div>
    </div>
  );
};

const Card = () => {
  // Array to store product details
  const products = [
    { image: product1, title: 'Living Room', textPosition: 'top-left' },
    { image: product2, title: 'Bedroom', textPosition: 'bottom-left' },
    { image: product3, title: 'Kitchen', textPosition: 'bottom-left' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-16 py-12">
      {/* First Product (Living Room) */}
      <div className="md:row-span-2">
        <ProductCard
          imageSrc={products[0].image}
          title={products[0].title}
          textPosition={products[0].textPosition}
        />
      </div>

      {/* Second Product (Bedroom) */}
      <div>
        <ProductCard
          imageSrc={products[1].image}
          title={products[1].title}
          textPosition={products[1].textPosition}
        />
      </div>

      {/* Third Product (Kitchen) */}
      <div>
        <ProductCard
          imageSrc={products[2].image}
          title={products[2].title}
          textPosition={products[2].textPosition}
        />
      </div>
    </div>
  );
};

export default Card;
