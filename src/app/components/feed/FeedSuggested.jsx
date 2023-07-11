import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profilesImg from "./images/profiles.png";
import axios from "axios";

const FeedSuggested = ({ profile }) => {
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState([]);

  const suggestedUserCall = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/feed/suggested`
      );

      setSuggestedUser(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    suggestedUserCall();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="mx-auto text-center border-l-[1px] border-[#ffffff32] h-screen">
        <div className="font-light text-md pt-10 pb-10">Suggested for you</div>
        <div>
          {suggestedUser.map((item) => (
            <>
              <div
                key={item.id}
                className=" items-center flex justify-between my-7 mx-8"
              >
                <div className="inline-flex text-left">
                  <Link href={`/${item.username}`}>
                    <Image
                      className="inline "
                      src={item.profile_pic}
                      height={40}
                      width={40}
                      alt="User Image"
                    ></Image>
                  </Link>
                  <Link
                    href={`/${item.username}`}
                    className="cursor-pointer inline-flex flex-col pl-2"
                  >
                    <div className="inline text-sm font-md ">
                      {item.username}
                    </div>
                    <div className="inline text-slate-400 text-xs font-extralight ">
                      {item.name}
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
