import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import ProfileImg from "../../profile/images/profile.png";
const Navbar = () => {
  let list = [
    { key: "Home", icon: <AiFillHome /> },
    { key: "Search", icon: <AiOutlineSearch /> },
    { key: "Cart", icon: <AiOutlineShoppingCart /> },
    { key: "Wishlist", icon: <AiFillHeart /> },
    { key: "Create", icon: <IoIosCreate /> },
    {
      key: "Profile",
      icon: (
        <Image
          className="profImg "
          src={ProfileImg}
          alt="Profile Picture"
        ></Image>
      ),
    },
  ];
  const Icon = ({ icon }) => {
    return <span className="navIcon ">{icon}</span>;
  };

  return (
    <>
      <div className="h-screen bg-black pl-20 fixed flex flex-col ">
        <Link href="" className="text-white my-24 mr-12 font-bold text-2xl">
          Ecommerce
        </Link>

        {list.map((item) => {
          return (
            <>
              <Link href="" className="my-3 w-fit">
                <Icon icon={item.icon} />
                <span className=" text-white mx-4 font-semibold text-xl">
                  {item.key}
                </span>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
