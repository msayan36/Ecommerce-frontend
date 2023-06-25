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
import ProfileImg from "../profile/images/profile.png";
const Navbar = () => {
  let list = [
    { key: "Home", icon: <AiFillHome />, link: "/" },
    { key: "Search", icon: <AiOutlineSearch />, link: "/search" },
    { key: "Cart", icon: <AiOutlineShoppingCart />, link: "/cart" },
    { key: "Wishlist", icon: <AiFillHeart />, link: "/wishlist" },
    { key: "Create", icon: <IoIosCreate />, link: "/create" },
    {
      key: "Profile",
      icon: (
        <Image
          className="profImg "
          src={ProfileImg}
          alt="Profile Picture"
        ></Image>
      ),
      link: "/profile",
    },
  ];
  const Icon = ({ icon }) => {
    return <span className="navIcon">{icon}</span>;
  };

  return (
    <>
      <div className="h-screen bg-black w-[15rem] fixed flex flex-col items-center ">
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-white my-12  font-bold text-2xl cursor-pointer transition-all hover:text-red-300"
          >
            Ecommerce
          </Link>

          {list.map((item) => {
            return (
              <>
                <Link
                  href={item.link}
                  className="my-3 w-fit flex items-center cursor-pointer hover:-translate-y-1 transition-all"
                  key={item.key}
                >
                  <Icon icon={item.icon} />
                  <span className=" text-white mx-4 font-semibold text-xl">
                    {item.key}
                  </span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
