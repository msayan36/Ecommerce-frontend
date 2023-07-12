"use client";

import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Success = () => {
  const [loading, setLoading] = useState(false);

  const instance = axios.create({
    withCredentials: true,
  });

  const resetCart = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cart/remove-fullCart`
      );
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    resetCart();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <h1 className="text-4xl mb-8 font-bold">Payment Successfull</h1>
      <Link
        href="/"
        className="text-lg underline text-red-400 hover:text-white hover:no-underline"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Success;
