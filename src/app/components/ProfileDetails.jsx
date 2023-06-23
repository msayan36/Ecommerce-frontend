import Link from "next/link";
const ProfileDetails = ({ details }) => {
  return (
    <>
      {details.variable === "products" ? (
        <div href="" className="pr-7">
          <div className="font-semibold inline pr-1">{details.figure}</div>
          <div className="font-extralight inline">{details.variable}</div>
        </div>
      ) : (
        <Link href="" className="pr-7">
          <div className="font-semibold inline pr-1">{details.figure}</div>
          <div className="font-extralight inline">{details.variable}</div>
        </Link>
      )}
    </>
  );
};

export default ProfileDetails;
