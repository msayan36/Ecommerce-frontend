import Link from "next/link";

const WhiteBtn = ({ data, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <div className="hover:cursor-pointer hover:opacity-90 transition-all bg-white rounded-lg w-fit text-black p-2 text-md font-bold">
            {data}
          </div>
        </Link>
      ) : (
        <div className="hover:cursor-pointer hover:opacity-90 transition-all bg-white rounded-lg w-fit text-black p-2 text-md font-bold">
          {data}
        </div>
      )}
    </>
  );
};

export default WhiteBtn;
