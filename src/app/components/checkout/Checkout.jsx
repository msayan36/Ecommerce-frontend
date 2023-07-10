"use client";

import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import WhiteBtn from "../WhiteBtn";
import axios from "axios";

const Checkout = () => {
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [totalSum, setTotalSum] = useState(0);

  const cartItemsCall = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`
      );
      let sum = res.data.reduce((accum, currElem) => accum + currElem.price, 0);

      setTotalSum(sum);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    cartItemsCall();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-row bg-black h-full overflow-hidden">
      <div className="basis-2/12">
        <Navbar />
      </div>
      <div className="basis-10/12 flex flex-col items-center mt-12 overflow-x-hidden scrollbar-hide">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <div className="mt-20 pb-12 mb-12 flex border-b-2 border-[#ffffff36]">
          <p className="mr-8 text-4xl">Total Payment: </p>
          <p className="ml-8 text-4xl">${totalSum}</p>
        </div>
        <WhiteBtn data="Make Payment" />
      </div>
    </div>
  );
};

export default Checkout;
