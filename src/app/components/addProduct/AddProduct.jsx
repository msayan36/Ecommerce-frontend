"use client";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }
  return (
    <>
      <div></div>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-1/5">
          <Navbar />
        </div>
        <div className="basis-4/5 pt-[3.3rem] ml-8">
          <h1 className="text-3xl font-semibold">Add Product</h1>
          <div className="my-10">
            <AddProductForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
