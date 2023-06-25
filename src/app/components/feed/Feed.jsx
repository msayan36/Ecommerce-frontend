"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import profilesImg from "./images/profiles.png";
import feedImg from "./images/feedImg.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import "./feed.css";
const Feed = () => {
  let profiles = [
    { name: "Profile 1", time: "6m" },
    { name: "Profile 2", time: "7m" },
    { name: "Profile 3", time: "8m" },
    { name: "Profile 4", time: "4m" },
    { name: "Profile 5", time: "1m" },
    { name: "Profile 6", time: "2m" },
    { name: "Profile 7", time: "3m" },
    { name: "Profile 8", time: "10m" },
    { name: "Profile 9", time: "8m" },
    { name: "Profile 10", time: "6m" },
    { name: "Profile 11", time: "2m" },
    { name: "Profile 12", time: "0m" },
    { name: "Profile 13", time: "3m" },
    { name: "Profile 14", time: "5m" },
    { name: "Profile 15", time: "5m" },
    { name: "Profile 16", time: "9m" },
    { name: "Profile 17", time: "11m" },
    { name: "Profile 18", time: "1m" },
  ];
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }
  return (
    <>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-2/12">
          <Navbar />
        </div>
        <div className="basis-7/12 border-l-[1px] border-[#ffffff32] h-screen overflow-x-hidden scrollbar-hide">
          <div className="flex flex-row justify-between py-5">
            <BiChevronLeft
              className="my-auto opacity-60 cursor-pointer hover:opacity-100 "
              color="white"
              size={30}
              onClick={slideLeft}
            ></BiChevronLeft>
            <div
              id="slider"
              className="flex flex-row w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {profiles.map((item) => (
                <>
                  <Link
                    href=""
                    className="text-center  px-5  hover:scale-95 ease-in-out duration-200 h-fit "
                  >
                    <Image
                      className="mx-auto"
                      src={profilesImg}
                      width={50}
                      height={50}
                      alt={item.name + " image"}
                    ></Image>
                    <div
                      href=""
                      className="text-white text-sm font-semibold cursor-pointer"
                      key={item}
                    >
                      {item.name}
                    </div>
                  </Link>
                </>
              ))}
            </div>

            <BiChevronRight
              className="my-auto opacity-60 cursor-pointer hover:opacity-100 "
              color="white"
              size={30}
              onClick={slideRight}
            ></BiChevronRight>
          </div>

          {profiles.map((item) => (
            <>
              <div className="mx-auto w-8/12 pb-10 mb-10 border-b-[1px] border-[#ffffff32]">
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
                  <BsDot className="inline" color="white"></BsDot>{" "}
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
                <div className="text-xl font-semibold">Product Titile</div>
                <div className="text-sm font-light">
                  Product description Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Iste nam, natus ipsam eos impedit excepturi
                  quia animi molestiae sunt omnis
                </div>
                <Link
                  href="/"
                  className="text-sm font-xs text-slate-300 hover:text-slate-100 pt-20 cursor-default"
                >
                  View 20 reviews
                </Link>
                <form action="">
                  <input
                    className="border-b-[1px] border-slate-800 pb-1 text-slate-400 hover:text-slate-100 bg-black text-sm "
                    type="text"
                    placeholder="Write a review..."
                  ></input>
                </form>
              </div>
            </>
          ))}
        </div>
        <div className="basis-3/12 border-l-[1px] border-[#ffffff32]"></div>
      </div>
    </>
  );
};

export default Feed;
