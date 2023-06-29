import Link from "next/link";
import Image from "next/image";
import profilesImg from "../feed/images/profiles.png";

const SearchResult = ({ searchResult }) => {
  return (
    <>
      <div
        key={searchResult.id}
        className=" items-center flex justify-between mb-7 mt-2 mx-4"
      >
        <div className="inline-flex text-left">
          <Link href={`/${searchResult.username}`}>
            <Image
              className="inline "
              src={profilesImg}
              height={40}
              width={40}
              alt="User Image"
            ></Image>
          </Link>
          <Link
            href={`/${searchResult.username}`}
            className="cursor-pointer inline-flex flex-col pl-2"
          >
            <div className="inline text-sm font-md ">
              {searchResult.username}
            </div>
            <div className="inline text-slate-400 text-xs font-extralight ">
              {searchResult.name}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
