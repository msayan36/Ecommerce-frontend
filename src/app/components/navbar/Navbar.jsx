"use client";

import { useState, useEffect } from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import ProfileImg from "../profile/images/profile.png";
import axios from "axios";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  let list = [
    { key: "Home", icon: <AiFillHome />, link: "/" },
    { key: "Search", icon: <AiOutlineSearch />, link: "/search" },
    { key: "Cart", icon: <AiOutlineShoppingCart />, link: "/cart" },
    { key: "Wishlist", icon: <AiFillHeart />, link: "/wishlist" },
    { key: "Create", icon: <IoIosCreate />, link: "/add-product" },
    {
      key: "Profile",
      icon: (
        <Image
          className="profImg"
          src={userInfo.profile_pic}
          alt="Profile Picture"
          width={40}
          height={40}
        ></Image>
      ),
      link: "/profile",
    },
  ];
  const Icon = ({ icon }) => {
    return <span className="navIcon">{icon}</span>;
  };

  const instance = axios.create({
    withCredentials: true,
  });

  const apiCall = async () => {
    setLoading(true);
    const res = await instance.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`
    );

    const productRes = await instance.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/products/${res.data.username}`
    );

    // console.log(res.data);
    // console.log(res.data.username);
    // console.log(res.data.name);
    setUserInfo(res.data);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="h-screen bg-black overflow-y-hidden flex flex-col items-center border-r-[1px] border-[#ffffff32]">
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-white my-12  font-bold text-2xl cursor-pointer transition-all hover:text-red-300"
          >
            Ecommerce
          </Link>

          {list.map((item, idx) => {
            return (
              <>
                <Link
                  href={item.link}
                  className="my-4 w-fit flex items-center cursor-pointer hover:-translate-y-1 transition-all"
                  key={item.key}
                >
                  <Icon icon={item.icon} />
                  <span className=" text-white mx-4 font-semibold text-xl">
                    {item.key}
                  </span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
