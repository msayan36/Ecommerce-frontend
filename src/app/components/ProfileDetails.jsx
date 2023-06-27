import Link from "next/link";
const ProfileDetails = ({ details }) => {
  return (
    <>
      {details.variable === "products" ? (
        <div href="" className="pr-7">
          <div className="font-semibold inline pr-1">{details.figure}</div>
          <div className="font-extralight inline">
            {details.figure === 1
              ? "Product"
              : details.variable.slice(0, 1).toUpperCase() +
                details.variable.slice(1)}
          </div>
        </div>
      ) : (
        <Link href="" className="pr-7">
          <div className="font-semibold inline pr-1">{details.figure}</div>
          <div className="font-extralight inline">
            {details.figure === 1
              ? details.variable === "followers"
                ? "Follower"
                : "Following"
              : details.variable.slice(0, 1).toUpperCase() +
                details.variable.slice(1)}
          </div>
        </Link>
      )}
    </>
  );
};

export default ProfileDetails;
