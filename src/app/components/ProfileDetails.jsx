import React from "react";

const ProfileDetails = ({ details }) => {
  return (
    <>
      <div className="pr-7">
        <div className="font-semibold inline pr-1">{details.figure}</div>
        <div className="font-extralight inline">{details.variable}</div>
      </div>
    </>
  );
};

export default ProfileDetails;
