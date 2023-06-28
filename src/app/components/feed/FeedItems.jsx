import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import feedImg from "./images/feedImg.jpg";
import { BsDot } from "react-icons/bs";
import {
  AiOutlineHeart,
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

  useEffect(() => {
    productFeedCall();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {productFeed.map((item) => (
        <>
          <div
            key={profiles._id}
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
              <Link href="" className="likebtn">
                <AiOutlineHeart
                  className=" inline"
                  color="white"
                  size={30}
                ></AiOutlineHeart>
              </Link>

              <AiOutlineShoppingCart
                className="inline"
                color="white"
                size={30}
              ></AiOutlineShoppingCart>
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

            <div className="text-sm font-light mb-2">{item.productDesc}</div>
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
      ))}
      <p className="text-center mb-4 text-[#ffffff63]">
        You Have Reached the End
      </p>
    </>
  );
};

export default FeedItems;
