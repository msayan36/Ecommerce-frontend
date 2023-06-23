import { useState } from "react";
import "./page.css";
import Image from "next/image";
import ProdImg from "./images/prod_img.png";
import { AiFillStar } from "react-icons/ai";

const EachProduct = () => {
  const [hover, setHover] = useState(false);

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={mouseOver}
      onMouseLeave={mouseOut}
      className="cursor-pointer w-1/3 pr-1 pb-1"
    >
      <div className=" relative">
        <Image className="product" src={ProdImg} alt="Product Image"></Image>
        <div
          className={`prod_not_hover ${
            hover && "prod_hover"
          }  absolute top-0 w-full h-full bg-black opacity-80 flex flex-col items-center justify-center`}
        >
          <div className="w-full top-1/3 text-center mt-auto absolute">
            <span className="text-sm font-bold text-white inline">4.8</span>
            <AiFillStar className="inline" color="white"></AiFillStar>
            <div className="text-xs mt-2 text-white font-semibold">
              1236 reviews
            </div>
          </div>
          <div className="text-sm font-md pb-4 text-white text-center absolute bottom-0 w-full flex items-center justify-between px-4">
            <span>Product Name </span>
            <span>$500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
