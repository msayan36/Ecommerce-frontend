"use client";

import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import "./feed.css";
import axios from "axios";

const FeedFollowing = ({ profiles }) => {
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [feedFollowingDet, setFeedFollowingDet] = useState([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const feedFollowingCall = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/feed/following`
      );

      setFeedFollowingDet(res.data.profile_arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    feedFollowingCall();
  }, []);

  if (loading) return <p>Loading...</p>;

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
          {feedFollowingDet.length > 0 ? (
            feedFollowingDet.map((item) => (
              <>
                <Link
                  key={item._id}
                  href={`/${item.username}`}
                  className="text-center  px-4  hover:scale-95 ease-in-out duration-200  "
                >
                  <Image
                    className="mx-auto"
                    src={profilesImg}
                    width={50}
                    height={50}
                    alt={item.username + " image"}
                  ></Image>
                  <div
                    href=""
                    className="text-white text-xs font-md cursor-pointer pt-1"
                  >
                    {item.username}
                  </div>
                </Link>
              </>
            ))
          ) : (
            <p className="text-center w-full mt-2">Follow Some Accounts</p>
          )}
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
