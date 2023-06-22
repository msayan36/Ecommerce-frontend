import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="h-screen bg-black pl-20 fixed ">
        <div className="text-white py-24 pr-12 font-bold text-2xl">
          Ecommerce
        </div>
        <div className="py-3">
          <AiFillHome className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Home
          </span>
        </div>
        <div className="py-3">
          <AiOutlineSearch className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Search
          </span>
        </div>
        <div className="py-3">
          <AiOutlineShoppingCart className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Cart
          </span>
        </div>
        <div className="py-3">
          <AiFillHeart className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Wishlist
          </span>
        </div>
        <div className="py-3">
          <IoIosCreate className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Create
          </span>
        </div>
        <div className="py-3">
          <CgProfile className="inline" color="white" size={25} />
          <span className="align-baseline text-white px-4 font-semibold text-xl">
            Profile
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
