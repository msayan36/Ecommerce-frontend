import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import "./feed.css";
const FeedFollowing = ({ profiles }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <>
      <div className="flex flex-row justify-between py-5">
        <BiChevronLeft
          className="my-auto opacity-60 cursor-pointer hover:opacity-100 "
          size={30}
          onClick={slideLeft}
        ></BiChevronLeft>
        <div
          id="slider"
          className="flex flex-row w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide z-20"
        >
          {profiles.map((item) => (
            <>
              <Link
                key={profiles.name}
                href=""
                className="text-center  pr-8  hover:scale-95 ease-in-out duration-200 h-fit "
              >
                <Image
                  className="mx-auto"
                  src={profilesImg}
                  width={55}
                  height={55}
                  alt={item.name + " image"}
                ></Image>
                <div
                  href=""
                  className="text-white text-xs font-semibold cursor-pointer pt-1"
                  key={item}
                >
                  {item.name}
                </div>
              </Link>
            </>
          ))}
        </div>

        <BiChevronRight
          className="arrowIcon my-auto opacity-60 cursor-pointer hover:opacity-100 z-10"
          size={30}
          onClick={slideRight}
        ></BiChevronRight>
      </div>
    </>
  );
};

export default FeedFollowing;
