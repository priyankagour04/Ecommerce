import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import img4 from '../../assets/images/product4.png';
import img5 from '../../assets/images/product5.png';
import img6 from '../../assets/images/product6.png';
import img7 from '../../assets/images/product7.png';
import img8 from '../../assets/images/product8.png';
import img9 from '../../assets/images/product9.png';
import { FaRegHeart } from "react-icons/fa";


// ProductCard Component (Reusable)
const ProductCard = ({ imgSrc, title, price, description, salePrice, newProduct, discount }) => {
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
          
          {/* Sale and New Labels */}
          {newProduct && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-3 rounded-md">NEW</span>
          )}
          {discount && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs py-1 px-3 rounded-md">
              -{discount}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 p-6 my-5">
          <div className="">
            {/* Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStarBorder key={index} className="text-yellow-400" />
              ))}
            </div>

            {/* Product Title */}
            <p className="text-lg font-semibold text-gray-800 mb-2">{title}</p>

            {/* Price and Sale Price */}
            <p className="text-xl font-semibold text-red-600 mb-1">
              {salePrice ? salePrice : price}
            </p>
            {salePrice && (
              <p className="text-sm line-through text-gray-500">{price}</p>
            )}

            {/* Product Description */}
            <p className="text-sm text-gray-600   mt-4 mb-4">{description}</p>

            {/* Add to Cart Button */}
            <button className="w-full py-2 px-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-700">
              Add to Cart
            </button>
            
            {/* Wishlist Icon */}
            <div className="mt-3 text-center items-center justify-center gap-2 flex">
            <FaRegHeart className=" hover:text-red-500  cursor-pointer"/>

          <h1> Wishlist</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ProductsCards Component (Maps over product data)
const ProductsCards = () => {
  // Array of Product Data
  const products = [
    {
      imgSrc: img4,
      title: "Off White Pillow",
      price: "$13.00",
      salePrice: "$7.99",
      description: "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      newProduct: true,
      discount: "50%",
    },
    {
      imgSrc: img5,
      title: "Table Lamp",
      price: "$39.99",
      salePrice: null,
      description: "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
      newProduct: false,
      discount: null,
    },
    {
      imgSrc: img6,
      title: "White Drawer unit",
      price: "$89.99",
      salePrice: null,
      description: "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      newProduct: false,
      discount: null,
    },
    {
      imgSrc: img7,
      title: "Cozy Sofa",
      price: "$299.00",
      salePrice: null,
      description: "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
      newProduct: false,
      discount: null,
    },
    {
      imgSrc: img8,
      title: "Bamboo Basket",
      price: "$9.99",
      salePrice: null,
      description: "With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.",
      newProduct: false,
      discount: null,
    },
    {
      imgSrc: img9,
      title: "Black Tray table",
      price: "$19.19",
      salePrice: null,
      description: "Easy to love at a price that’s hard to resist. Buy one or buy a few and make every space where you sit more convenient.",
      newProduct: false,
      discount: null,
    },
    // Add more products as needed...
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-24 lg:px-0 md:p-5 md:space-y-5 py-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imgSrc={product.imgSrc}
          title={product.title}
          price={product.price}
          description={product.description}
          salePrice={product.salePrice}
          newProduct={product.newProduct}
          discount={product.discount}
        />
      ))} 
    </div>
  );
};

export default ProductsCards;
