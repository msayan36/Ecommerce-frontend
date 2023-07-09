"use client";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Items from "./Items";
import WhiteBtn from "../WhiteBtn";
import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-2/12 ">
          <Navbar />
        </div>
        <div className="basis-10/12 pl-10 pr-20 h-fit ">
          <div className="text-3xl text-white py-12">My Wishlist</div>
          <div className="py-5 border-b-[1px] border-[#ffffff32]">
            <Items />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
