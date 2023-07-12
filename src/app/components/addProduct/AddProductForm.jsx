"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileImg from "../profile/images/profile.png";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AddProductForm = () => {
  const router = useRouter();
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productDesc: "",
    productImg: "",
    price: null,
  });

  const [formProfileImage, setFormProfileImage] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    // setFormProfileImage(file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    // console.log(base64EncodedImage);
    setLoading(true);
    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadImage`,
        {
          data: base64EncodedImage,
        }
      );

      setProductInfo((prevVal) => ({ ...prevVal, productImg: res.data.url }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const upload = async () => {
    if (previewSource) await uploadImage(previewSource);
  };

  if (loading) return <h1>Loading ...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productName, productDesc, price, productImg } = productInfo;
    if (!productName || !productDesc || !price)
      return toast.error("Must Provide all Values");
    setLoading(true);

    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products/add`,
        {
          productName,
          productDesc,
          productImg,
          price,
        }
      );

      setLoading(false);
      toast.success("Product Added Successfully");
      console.log(res);
      router.replace("/profile");
    } catch (error) {
      const { message } = JSON.parse(error.request.response);
      setLoading(false);
      // console.log(error);
      toast.error(message);
    }
  };

  return (
    <>
      <form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          {previewSource && (
            <Image
              src={previewSource}
              alt="Profile Picture"
              width={60}
              height={60}
            ></Image>
          )}
          <input
            type="file"
            className="ml-4 text-blue-400 cursor-pointer hover:text-blue-700"
            value={formProfileImage}
            onChange={handleImageInputChange}
          />
          {previewSource && (
            <button
              onClick={upload}
              className="btn bg-blue-600 px-2 py-1 rounded"
            >
              Upload
            </button>
          )}
        </div>
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="text"
          value={productInfo.productName}
          onChange={(e) =>
            setProductInfo((prevVal) => ({
              ...prevVal,
              productName: e.target.value,
            }))
          }
          placeholder="Add Product Title"
          required
        />
        <input
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[18rem] mb-4"
          type="number"
          value={productInfo.price}
          onChange={(e) =>
            setProductInfo((prevVal) => ({ ...prevVal, price: e.target.value }))
          }
          placeholder="Add Product Price"
          required
        />
        <textarea
          className="py-[0.2rem] px-2 outline-none bg-transparent border-[0.1rem] text-white rounded-md border-white w-[25rem] h-[8rem] mb-4"
          value={productInfo.productDesc}
          onChange={(e) =>
            setProductInfo((prevVal) => ({
              ...prevVal,
              productDesc: e.target.value,
            }))
          }
          placeholder="Add Product Details"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 w-fit py-[0.3rem] px-2 rounded hover:bg-blue-900 cursor-pointer transition-all"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddProductForm;
