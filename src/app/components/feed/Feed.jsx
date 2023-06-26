"use client";

import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import FeedFollowing from "./FeedFollowing";
import FeedItems from "./FeedItems";
import FeedSuggested from "./FeedSuggested";
const Feed = () => {
  let profiles = [
    { name: "Profile 1", time: "6m" },
    { name: "Profile 2", time: "7m" },
    { name: "Profile 3", time: "8m" },
    { name: "Profile 4", time: "4m" },
    { name: "Profile 5", time: "1m" },
    { name: "Profile 6", time: "2m" },
    { name: "Profile 7", time: "3m" },
    { name: "Profile 8", time: "10m" },
    { name: "Profile 9", time: "8m" },
    { name: "Profile 10", time: "6m" },
    { name: "Profile 11", time: "2m" },
    { name: "Profile 12", time: "0m" },
    { name: "Profile 13", time: "3m" },
    { name: "Profile 14", time: "5m" },
    { name: "Profile 15", time: "5m" },
    { name: "Profile 16", time: "9m" },
    { name: "Profile 17", time: "11m" },
    { name: "Profile 18", time: "1m" },
  ];
  let suggProf = [
    { uname: "username 1", pname: "Profile Name 1" },
    { uname: "username 2", pname: "Profile Name 2" },
    { uname: "username 3", pname: "Profile Name 3" },
    { uname: "username 4", pname: "Profile Name 4" },
    { uname: "username 5", pname: "Profile Name 5" },
  ];

  const router = useRouter();
  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");
    if (!localStorage.userInfo) router.replace("/register");
  }
  return (
    <>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-2/12">
          <Navbar />
        </div>
        <div className="basis-7/12 border-l-[1px] border-[#ffffff32] h-screen overflow-x-hidden scrollbar-hide">
          <FeedFollowing profiles={profiles} />
          <FeedItems profiles={profiles} />
        </div>
        <div className="basis-3/12 ">
          <FeedSuggested profile={suggProf} />
        </div>
      </div>
    </>
  );
};

export default Feed;
