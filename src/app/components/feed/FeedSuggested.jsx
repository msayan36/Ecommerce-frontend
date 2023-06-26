import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
const FeedSuggested = ({ profile }) => {
  return (
    <>
      <div className="mx-auto text-center">
        <div className="font-light text-md pt-10 pb-10">Suggested for you</div>
        <div>
          {profile.map((item) => (
            <>
              <div
                href=""
                className=" items-center flex justify-between my-7 mx-8"
              >
                <div className="inline-flex text-left">
                  <Link href="">
                    <Image
                      className="inline "
                      src={profilesImg}
                      height={40}
                      width={40}
                      alt="User Image"
                    ></Image>
                  </Link>
                  <Link
                    href=""
                    className="cursor-pointer inline-flex flex-col pl-2"
                  >
                    <div href="" className="inline text-sm font-md ">
                      {item.uname}
                    </div>
                    <div
                      href=""
                      className="inline text-slate-400 text-xs font-extralight "
                    >
                      {item.pname}
                    </div>
                  </Link>
                </div>

                <Link
                  href=""
                  className="inline-block text-sm  align-middle text-blue-700 justify-end"
                >
                  Follow
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedSuggested;
