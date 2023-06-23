"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Feedback = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }
  return (
    <>
      <h1 className="text-4xl font-bold">Main Page</h1>
      <Link href="/profile">Profile</Link>
    </>
  );
};

export default Feedback;
