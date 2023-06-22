import React from "react";
import Link from "next/link";
const ProfileDetails = ({ details }) => {
  return (
    <>
      <Link href="" className="pr-7">
        <div className="font-semibold inline pr-1">{details.figure}</div>
        <div className="font-extralight inline">{details.variable}</div>
      </Link>
    </>
  );
};

export default ProfileDetails;
