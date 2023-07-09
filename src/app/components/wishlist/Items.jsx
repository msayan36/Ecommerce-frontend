import React from "react";
import { useState } from "react";
import Image from "next/image";
import prodImg from "./images/feedImg.jpg";
import { AiFillStar } from "react-icons/ai";
import WhiteBtn from "../WhiteBtn";
const Items = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <div className="flex flex-row">
        <Image className="w-1/6" src={prodImg} alt="Product Image"></Image>
        <div className="w-4/6 flex flex-col justify-center pl-5 ">
          <div className="text-2xl font-semibold ">Product Name</div>
          <div className="text-sm text-justify font-extralight  pt-5 text-slate-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Nobis est, laboriosam,
            aliquid reiciendis consequatur nemo quis quo vitae recusandae facere
            quasi r
          </div>
          <div className="pt-5">
            <AiFillStar className="inline" color="white" size={25}></AiFillStar>
            <div className="inline ml-1">4.5(12k Reviews)</div>
          </div>
        </div>

        <div className="w-1/6 flex-col flex justify-center ">
          <div className="text-right  text-2xl font-extralight">₹0000</div>
          <div className="flex justify-end pt-5">
            <WhiteBtn
              className="inline ml-auto"
              data="Add to Cart"
              link="/"
            ></WhiteBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
