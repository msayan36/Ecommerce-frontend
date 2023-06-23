"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";

const Feed = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }
  return (
    <>
      <Navbar />
    </>
  );
};

export default Feed;
