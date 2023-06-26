import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import feedImg from "./images/feedImg.jpg";
import { BsDot } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
const FeedItems = ({ profiles }) => {
  return (
    <>
      {profiles.map((item) => (
        <>
          <div
            key={profiles.name}
            className="mx-auto w-8/12 pb-10 my-10 border-b-[1px] border-[#ffffff32]"
          >
            <div>
              <Link href="" className="">
                <Image
                  className="inline"
                  src={profilesImg}
                  height={30}
                  width={30}
                  alt="User Image"
                ></Image>
                <div href="" className="inline text-sm font-bold pl-3">
                  {item.name}
                </div>
              </Link>
              <BsDot className="inline" color="white" size={30}></BsDot>{" "}
              <div className="inline font-light text-sm">{item.time}</div>
            </div>
            <Image
              className="my-3 w-full"
              src={feedImg}
              width={200}
              height={200}
              alt="Feed mage"
            ></Image>
            <div className="flex pb-3">
              <Link href="" className="likebtn">
                <AiOutlineHeart
                  className=" inline"
                  color="white"
                  size={30}
                ></AiOutlineHeart>
              </Link>

              <AiOutlineShoppingCart
                className="inline"
                color="white"
                size={30}
              ></AiOutlineShoppingCart>
              <div className="ml-auto">
                <AiFillStar
                  className="inline"
                  color="white"
                  size={25}
                ></AiFillStar>
                <div className="inline font-semibold text-sm pl-1">
                  4.8(15k)
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className=" inline text-xl font-semibold mt-auto">
                Product Title
              </div>
              <div className="inline text-3xl font-normal ml-auto">₹0000</div>
            </div>

            <div className="text-sm font-light mb-2">
              Product description Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Iste nam, natus ipsam eos impedit excepturi quia
              animi molestiae sunt omnis
            </div>
            <Link
              href="/"
              className="text-sm font-xs text-slate-300 font-light hover:text-slate-100 cursor-default"
            >
              View 20 reviews
            </Link>
            <form className="mt-2" action="">
              <input
                className="w-1/4 border-b-[1px] border-[#ffffff32] pb-1 text-[#ffffff32] font-light hover:text-slate-100 bg-black text-sm "
                type="text"
                placeholder="Write a review..."
              ></input>
            </form>
          </div>
        </>
      ))}
    </>
  );
};

export default FeedItems;
