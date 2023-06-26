"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileImg from "../profile/images/profile.png";
import ProdImg from "../profile/images/prod_img.png";
import "../../global.css";
import WhiteBtn from "../WhiteBtn";
import BlackBtn from "../BlackBtn";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import { IoIosSettings } from "react-icons/io";
import ProfileDetails from "../ProfileDetails";
import "../profile/page.css";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import EachProduct from "../profile/EachProduct";
import Footer from "../footer/Footer";

const Username = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
    if (
      window.location.pathname.slice(1) ===
      JSON.parse(localStorage.userInfo).username
    ) {
      router.replace("/profile");
    }
  }

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [productInfo, setProductInfo] = useState({});

  // const products_count = 0;
  // const followers_count = 0;
  // const following_count = 0;

  const instance = axios.create({
    withCredentials: true,
  });

  const apiCall = async () => {
    if (typeof window !== "undefined") {
      // console.log(window.location.pathname.slice(1));
      setLoading(true);
      try {
        const res = await instance.get(
          `${
            process.env.NEXT_PUBLIC_SERVER_URL
          }/users/${window.location.pathname.slice(1)}`
        );

        const productRes = await instance.get(
          `${
            process.env.NEXT_PUBLIC_SERVER_URL
          }/products/${window.location.pathname.slice(1)}`
        );

        // console.log(res.data);
        // console.log(res.data.username);
        // console.log(res.data.name);
        setUserInfo(res.data);
        setProductInfo(productRes.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.data.message === "User not Found")
          router.replace("/not-found/404");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  const products_count = userInfo.products_count
    ? userInfo.products_count.length
    : 0;
  const followers_count = userInfo.followers ? userInfo.followers.length : 0;
  const following_count = userInfo.following ? userInfo.following.length : 0;

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div></div>
      <div className="flex flex-row bg-black h-full ">
        <div className="basis-2/12">
          <Navbar />
        </div>
        <div className="basis-10/12 pt-16">
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
            <div className="text-white">
              <div className="flex flex-row">
                <div className="text-xl font-semibold inline pr-5 py-1">
                  {userInfo.username ? userInfo.username : "Username"}
                  {/* Username */}
                </div>
                <div className="pr-5">
                  <WhiteBtn data="Follow"></WhiteBtn>
                </div>
                <div className="pr-5">
                  {/* <BlackBtn data="Following"></BlackBtn> */}
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
              <div className="font-bold pt-4 pb-10 w-3/4">
                <div>
                  {userInfo.name ? userInfo.name : "Name"}
                  {/* Name */}
                </div>
                <div className="font-extralight">
                  {userInfo.profileDesc
                    ? userInfo.profileDesc
                    : "No Profile Description"}
                  {/* Profile Desc */}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-4 font-sans flex items-center justify-center">
            <AiOutlineShoppingCart className="mr-2 text-lg" />
            <p className="text-white text-base font-semibold w-fit">PRODUCTS</p>
          </div>

          <div className="flex flex-wrap flex-row px-10 ml-8">
            {productInfo.length > 0
              ? productInfo.map((item) => (
                  // <>
                  <EachProduct key={item._id} productDet={item} />
                  // </>
                ))
              : "No Products Added Yet"}
            {/* <div className="w-1/3 pr-1 pb-1">
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

export default Username;
