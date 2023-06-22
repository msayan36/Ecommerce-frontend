import "./profile.scss";
import "../global.css";
import WhiteBtn from "../components/WhiteBtn";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import { IoIosSettings } from "react-icons/io";
import ProfileDetails from "../components/ProfileDetails";
import ProfileImg from "./images/profile.png";
import ProdImg from "./images/prod_img.png";
import "./page.css";
import { AiFillStar } from "react-icons/ai";
const Profile = () => {
  let img = [1, 2, 3, 4, 5];

  return (
    <>
      <div></div>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-1/5">
          <Navbar></Navbar>
        </div>
        <div className="basis-4/5 pt-16 border-l-2 border-white ">
          <div className="flex flex-row">
            <div className=" basis-1/3 flex justify-end items-center pr-7 h-fit ">
              <Image
                className=" "
                src={ProfileImg}
                alt="Profile Picture"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="basis-2/3 text-white">
              <div className=" flex flex-row">
                <div className="text-xl font-semibold inline pr-5 py-1">
                  username
                </div>
                <div className="pr-5">
                  <WhiteBtn data="Edit Profile"></WhiteBtn>
                </div>
                <div className="py-1">
                  <IoIosSettings size={35}></IoIosSettings>
                </div>
              </div>
              <div className=" flex flex-row text-base pt-7">
                <ProfileDetails
                  details={{ figure: "4000+", variable: "products" }}
                ></ProfileDetails>
                <ProfileDetails
                  details={{ figure: "5023", variable: "followers" }}
                ></ProfileDetails>
                <ProfileDetails
                  details={{ figure: "2000", variable: "following" }}
                ></ProfileDetails>
              </div>
              <div className=" text-base pt-7 pb-10 w-3/4">
                <div>Lorem ipsum dolor sit</div>
                <div className="font-extralight">
                  amet consectetur adipisicing elit. Libero maiores, ducimus
                  labore neque quam debitis exercitationem repellat iste fugiat
                  voluptatem aut distincti
                </div>
              </div>
            </div>
          </div>
          <div className="text-center border-b-2 text-3xl text-white mb-1">
            Products
          </div>

          <div className="flex flex-wrap flex-row w-fit pl-1">
            {img.map((item) => (
              <>
                <div key={item} className="hov  w-1/3 pr-1 pb-1">
                  <div className=" relative">
                    <Image
                      className="product"
                      src={ProdImg}
                      alt="Product Image"
                    ></Image>
                    <div className="prod_hover  absolute top-0 w-full h-full bg-black opacity-80">
                      <div className="w-1/2 mx-28 text-center mt-auto absolute py-48">
                        <span className="text-sm font-bold text-white inline">
                          4.8
                        </span>
                        <AiFillStar
                          className="inline"
                          color="white"
                        ></AiFillStar>
                        <div className="text-xs text-white font-semibold">
                          1236 reviews
                        </div>
                      </div>

                      <div className="text-sm font-md pb-4 text-white text-center absolute bottom-0 w-1/2 mx-28  ">
                        Product Name
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
        </div>
      </div>
    </>
  );
};
export default page;
