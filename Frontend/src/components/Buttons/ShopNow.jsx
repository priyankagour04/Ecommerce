import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ShopNow = () => {
  return (
    <>
     <div className="">
     <button className="flex items-center font-semibold gap-4  ">
        Shop Now <FaArrowRightLong />
      </button>
      <div
        className="border border-t border-black w-28 "
      ></div>
     </div>
    </>
  );
};

export default ShopNow;
