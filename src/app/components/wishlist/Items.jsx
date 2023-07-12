import React from "react";
import { useState } from "react";
import Image from "next/image";
import prodImg from "./images/feedImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";
import WhiteBtn from "../WhiteBtn";
import axios from "axios";

const Items = ({ data }) => {
  const instance = axios.create({
    withCredentials: true,
  });
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value
    if (count > 0) setCount(count - 1);
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
      toast.error("Unable to Add To Cart");
    }
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <div className="flex flex-row">
        <Image
          className="w-1/6"
          src={data.productImg === "Default Link" ? prodImg : data.productImg}
          width={200}
          height={200}
          alt="Product Image"
        ></Image>
        <div className="w-4/6 flex flex-col justify-center pl-5 ">
          <div className="text-2xl font-semibold ">{data.productName}</div>
          <div className="text-sm text-justify font-extralight  pt-5 text-slate-200">
            {data.productDesc}
          </div>
          <div className="pt-5">
            {data.rating.length > 0 && (
              <AiFillStar
                className="inline"
                color="white"
                size={25}
              ></AiFillStar>
            )}
            <div className="inline font-semibold text-sm ml-1">
              {data.rating.length === 0
                ? "No Ratings Yet"
                : `${
                    data.rating.reduce(
                      (total, rating) => total + rating.value,
                      0
                    ) / data.rating.length
                  } (${data.rating.length})`}
            </div>
          </div>
        </div>

        <div className="w-1/6 flex-col flex justify-center ">
          <div className="text-right  text-2xl font-extralight">
            ${data.price}
          </div>
          <div className="flex justify-end pt-5">
            <button onClick={() => handleAddCart(data._id)}>
              <WhiteBtn
                className="inline ml-auto"
                data="Add to Cart"
              ></WhiteBtn>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Items;
