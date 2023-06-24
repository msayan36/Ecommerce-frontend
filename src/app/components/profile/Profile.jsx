"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileImg from "./images/profile.png";
import ProdImg from "./images/prod_img.png";
import "../../global.css";
import WhiteBtn from "../WhiteBtn";
import BlackBtn from "../BlackBtn";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import { IoIosSettings } from "react-icons/io";
import ProfileDetails from "../ProfileDetails";
import "./page.css";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import EachProduct from "./EachProduct";
import Footer from "../footer/Footer";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [logout, setLogout] = useState(false);
  const router = useRouter();

  let img = [1, 2, 3, 4, 5];

  // axios.defaults.withCredentials = true;
  const instance = axios.create({
    withCredentials: true,
  });

  const apiCall = async () => {
    setLoading(true);
    const res = await instance.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`
    );

    // console.log(res.data);
    // console.log(res.data.username);
    // console.log(res.data.name);
    setUserInfo(res.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/logout`
      );
      // console.log(res);
      localStorage.removeItem("userInfo");
      setLoading(false);
      toast.success("User Logged Out Successfully");
      router.replace("/register");
    } catch (error) {
      const { message } = JSON.parse(error.request.response);
      setLoading(false);
      toast.error(message);
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if (logout === true) {
      handleLogout();
      setLogout(false);
    }
  }, [logout]);

  const products_count = userInfo.products_count
    ? userInfo.products_count.length
    : 0;
  const followers_count = userInfo.followers ? userInfo.followers.length : 0;
  const following_count = userInfo.following ? userInfo.following.length : 0;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div></div>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-1/5">
          <Navbar />
        </div>
        <div className="basis-4/5 pt-16">
          <div className="flex flex-row border-b-[1px] border-[#ffffff32] mr-2">
            <div className="basis-1/3 flex justify-end items-center mr-20 h-fit">
              <Image
                className=" "
                src={ProfileImg}
                alt="Profile Picture"
                width={140}
                height={140}
              ></Image>
            </div>
            <div className="basis-2/3 text-white">
              <div className="flex flex-row">
                <div className="text-xl font-semibold inline pr-5 py-1">
                  {userInfo.username ? userInfo.username : "Username"}
                  {/* Username */}
                </div>
                <div className="pr-5">
                  <WhiteBtn data="Edit Profile" link="/edit-profile"></WhiteBtn>
                </div>
                <div className="pr-5">
                  <BlackBtn data="Logout" setLogout={setLogout}></BlackBtn>
                </div>
                {/* <div className="py-1">
                  <IoIosSettings
                    className="hover:cursor-pointer"
                    size={35}
                  ></IoIosSettings>
                </div> */}
              </div>
              <div className=" flex flex-row text-base pt-4">
                <ProfileDetails
                  details={{ figure: products_count, variable: "products" }}
                ></ProfileDetails>
                <ProfileDetails
                  details={{ figure: followers_count, variable: "followers" }}
                ></ProfileDetails>
                <ProfileDetails
                  details={{ figure: following_count, variable: "following" }}
                ></ProfileDetails>
              </div>
              <div className="text-base pt-4 pb-10 w-3/4">
                <div>
                  {userInfo.name ? userInfo.name : "Name"}
                  {/* Name */}
                </div>
                <div className="font-extralight">
                  {userInfo.profileDesc
                    ? userInfo.profileDesc
                    : "No Profile Description"}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center w-full mr-4 my-4 font-sans flex items-center justify-center">
            <AiOutlineShoppingCart className="mr-2 text-lg" />
            <p className="text-white text-base font-semibold w-fit">PRODUCTS</p>
          </div>

          <div className="flex flex-wrap flex-row w-fit px-10">
            {img.map((item) => (
              // <>
              <EachProduct key={item} />
              // </>
            ))}
            {/*             <div className="w-1/3 pr-1 pb-1">
              <Image src={ProdImg} alt="Product Image"></Image>
            </div>
            <div className="w-1/3 pr-1 pb-1">
              <Image src={ProdImg} alt="Product Image"></Image>
            </div>
            <div className="w-1/3 pr-1 pb-1">
              <Image src={ProdImg} alt="Product Image"></Image>
            </div>
            <div className="w-1/3 pr-1 pb-1">
              <Image src={ProdImg} alt="Product Image"></Image>
            </div> */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
