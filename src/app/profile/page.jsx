import "./profile.scss";
import Link from "next/link";
import "../global.css";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/profile/Profile";
const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <Profile />
    </>
  );
};
export default page;
