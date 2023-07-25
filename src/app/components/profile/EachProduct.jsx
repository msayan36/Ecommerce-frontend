import { useState } from "react";
import React from "react";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import ProdImg from "./images/prod_img.png";
import ProfileImg from "./images/profile.png";
import { ToastContainer, toast } from "react-toastify";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import axios from "axios";

import Modal from "react-modal";

const EachProduct = ({ productDet, isMyProfile = false, userInfo }) => {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const instance = axios.create({
    withCredentials: true,
  });

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  const handleAddCart = async (pdtId) => {
    setLoading(true);
    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cart?product=${pdtId}`
      );
      setLoading(false);
      toast.success("Added To Cart");
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.success("Unable to Add To Cart");
    }
  };

  const handleAddWishlist = async (pdtId) => {
    setLoading(true);
    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist?product=${pdtId}`
      );
      setLoading(false);
      toast.success("Added To Wishlist");
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.success("Unable to Add To Wishlist");
    }
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOut}
        className={`cursor-pointer w-1/3 pr-1 pb-1`}
      >
        <div onClick={() => setIsOpen(true)} className=" relative">
          <Image
            className="product h-fit w-fit"
            src={
              productDet.productImg === "Default Link"
                ? ProdImg
                : productDet.productImg
            }
            width={500}
            height={500}
            alt="Product Image"
          ></Image>
          <div
            className={`prod_not_hover ${
              hover && "prod_hover"
            }  absolute top-0 w-full h-full bg-black opacity-80 flex flex-col items-center justify-center`}
          >
            <div className="w-full top-1/3 text-center mt-auto absolute">
              <span className="text-sm font-bold text-white inline">
                {productDet.rating.length === 0
                  ? "No Ratings Yet"
                  : productDet.rating.reduce(
                      (total, item) => total + item.value,
                      0
                    ) / productDet.rating.length}
              </span>
              {productDet.rating.length > 0 && (
                <AiFillStar className="inline" color="white"></AiFillStar>
              )}
              <div className="text-xs mt-2 text-white font-semibold">
                {productDet.rating.length}{" "}
                {productDet.rating.length === 1 ? "review" : "reviews"}
              </div>
            </div>
            <div className="text-sm font-md pb-4 text-white text-center absolute bottom-0 w-full flex items-center justify-between px-4">
              <span>{productDet.productName}</span>
              <span>${productDet.price}</span>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          className="focus:outline-none bg-none w-8/12 mx-auto my-auto"
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
        >
          <div className="bg-slate-950 px-5 py-5 w-fit grid grid-flow-col grid-cols-2 relative">
            <Image
              className="product w-full cols"
              src={
                productDet.productImg === "Default Link"
                  ? ProdImg
                  : productDet.productImg
              }
              width={500}
              height={500}
              alt="Product Image"
            ></Image>
            <div className="text-white pl-5 w-full flex flex-col justify-between">
              <div>
                <div className="border-b-[1px] border-[#ffffff32] pt-2 pb-4 flex">
                  <Image
                    className=" "
                    src={userInfo.profile_pic}
                    alt="Profile Picture"
                    width={30}
                    height={30}
                  ></Image>
                  <div className=" inline text-md font-md ml-2">
                    {productDet.username}
                  </div>
                </div>
                <div className="mt-10 mb-8">
                  <div className="flex justify-between ">
                    <div className="text-2xl font-light">
                      {productDet.productName}
                    </div>
                    <div className="text-2xl font-light">
                      ${productDet.price}
                    </div>
                  </div>
                  <div className="text-sm pt-2 text-slate-300 font-extralight">
                    {productDet.productDesc}
                  </div>
                </div>
                {!isMyProfile && (
                  <button
                    className="my-1 bg-slate-200 px-3 hover:text-white hover:bg-cyan-200/75 transition-all py-3 text-black w-40 text-center rounded-lg"
                    onClick={() => handleAddCart(productDet._id)}
                  >
                    {loading ? "Loading ..." : "Add To Cart"}
                  </button>
                )}
              </div>
              <div className="border-t-[1px] border-[#ffffff32] py-2">
                <div className="flex items-center">
                  {!isMyProfile && (
                    <button
                      className="likebtn"
                      onClick={() => handleAddWishlist(productDet._id)}
                    >
                      <AiOutlineHeart
                        className=" inline"
                        color="white"
                        size={30}
                      ></AiOutlineHeart>
                    </button>
                  )}

                  {/* <AiOutlineShoppingCart
                  className="inline"
                  color="white"
                  size={30}
                ></AiOutlineShoppingCart> */}
                  <div className="ml-auto">
                    {productDet.rating.length > 0 && (
                      <AiFillStar
                        className="inline"
                        color="white"
                        size={25}
                      ></AiFillStar>
                    )}

                    <div className="inline font-semibold text-sm pl-1">
                      {productDet.rating.length === 0
                        ? "No Ratings Yet"
                        : productDet.rating.reduce(
                            (total, item) => total + item.value,
                            0
                          ) / productDet.rating.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
};

export default EachProduct;
