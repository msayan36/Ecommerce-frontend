"use client";

import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Items from "./Items";
import WhiteBtn from "../WhiteBtn";
import { useRouter } from "next/navigation";
import axios from "axios";

const Wishlist = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }

  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const wishlistItemsCall = async () => {
    setLoading(true);

    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist`
      );

      setWishlistItems(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    wishlistItemsCall();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-2/12 ">
          <Navbar />
        </div>
        <div className="basis-10/12 pl-10 pr-20 h-fit ">
          <div className="text-3xl text-white py-12">My Wishlist</div>
          {wishlistItems.length === 0 ? (
            <p className="text-center mb-4 text-[#ffffff63]">
              No Items in the Cart Yet.
            </p>
          ) : (
            <>
              {wishlistItems.map((item) => (
                <div className="py-5 border-b-[1px] border-[#ffffff32]">
                  <Items key={item._id} data={item} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
