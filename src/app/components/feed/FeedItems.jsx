import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import feedImg from "./images/feedImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import { BsDot } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const FeedItems = ({ profiles }) => {
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [productFeed, setProductFeed] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const productFeedCall = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/feed`
      );

      setProductFeed(res.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
      toast.success("Unable to Add To Cart");
    }
  };

  const handleAddWishlist = async (pdtId) => {
    setLoading(true);
    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/wishlist?product=${pdtId}`
      );
      setLoading(false);
      toast.success("Added To Wishlist");
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.success("Unable to Add To Wishlist");
    }
  };

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
    productFeedCall();
    wishlistItemsCall();
  }, []);

  // const notWishlisted = productFeed.filter((pdtItm) => {
  //   for (let i = 0; i < wishlistItems.length; i++) {
  //     console.log();
  //     if (pdtItm._id !== wishlistItems[i]._id) return pdtItm;
  //   }
  // });

  // console.log(notWishlisted);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {productFeed.map((item) => {
        let i = 0;
        return (
          <>
            <div
              key={item._id}
              className="mx-auto w-8/12 pb-10 my-10 border-b-[1px] border-[#ffffff32]"
            >
              <div>
                <Link href={`/${item.username}`} className="">
                  <Image
                    className="inline"
                    src={profilesImg}
                    height={30}
                    width={30}
                    alt="User Image"
                  ></Image>
                  <div href="" className="inline text-sm font-bold pl-3">
                    {item.username}
                  </div>
                </Link>
                <BsDot className="inline" color="white" size={30}></BsDot>{" "}
                <div className="inline font-light text-sm">
                  {moment(item.createdAt).format("DD MMMM, YYYY")}
                </div>
              </div>
              <Image
                className="my-3 w-full"
                src={feedImg}
                width={200}
                height={200}
                alt="Feed mage"
              ></Image>
              <div className="flex pb-3">
                {wishlistItems.map((w, idx, arr) => {
                  if (w._id === item._id) {
                    i++;
                    return (
                      <button
                        className="likebtn"
                        // onClick={() => handleAddWishlist(item._id)}
                      >
                        <AiFillHeart
                          className="inline"
                          color="red"
                          size={30}
                        ></AiFillHeart>
                      </button>
                    );
                  }
                })}
                {i === 0 && (
                  <button
                    className="likebtn"
                    onClick={() => handleAddWishlist(item._id)}
                  >
                    <AiOutlineHeart
                      className="inline"
                      color="white"
                      size={30}
                    ></AiOutlineHeart>
                  </button>
                )}
                {/* <AiOutlineShoppingCart
                className="inline"
                color="white"
                size={30}
              ></AiOutlineShoppingCart> */}
                <div className="ml-auto">
                  {item.rating.length > 0 && (
                    <AiFillStar
                      className="inline"
                      color="white"
                      size={25}
                    ></AiFillStar>
                  )}
                  <div className="inline font-semibold text-sm pl-1">
                    {item.rating.length === 0
                      ? "No Ratings Yet"
                      : `${
                          item.rating.reduce(
                            (total, rating) => total + rating.value,
                            0
                          ) / item.rating.length
                        } (${item.rating.length})`}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className=" inline text-xl font-semibold mt-auto">
                  {item.productName}
                </div>
                <div className="inline text-3xl font-normal ml-auto">
                  ₹{item.price}
                </div>
              </div>

              <div className="">
                <div className="text-sm font-extralight text-justify mb-2">
                  {item.productDesc}
                </div>
                <button
                  className="my-4 bg-slate-200 px-2 hover:text-white hover:bg-cyan-200/75 transition-all py-2 text-black w-32 text-center rounded-lg"
                  onClick={() => handleAddCart(item._id)}
                >
                  Add To Cart
                </button>
              </div>

              <Link
                href="/"
                className="text-sm font-xs text-slate-300 font-light hover:text-slate-100 cursor-default"
              >
                View 20 reviews
              </Link>
              <form className="mt-2" action="">
                <input
                  className="w-1/4 border-b-[1px] border-[#ffffff32] pb-1 text-[#ffffff32] font-light hover:text-slate-100 bg-black text-sm "
                  type="text"
                  placeholder="Write a review..."
                ></input>
              </form>
            </div>
          </>
        );
      })}
      <p className="text-center mb-4 text-[#ffffff63]">
        You Have Reached the End
      </p>
      <ToastContainer />
    </>
  );
};

export default FeedItems;
