"use client";

import { useState, useEffect } from "react";
import BlackBtn from "../BlackBtn";
import Navbar from "../navbar/Navbar";
import SearchResult from "./SearchResult";
import "./search.scss";
import axios from "axios";

const Search = () => {
  const instance = axios.create({
    withCredentials: true,
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/search?q=${searchQuery}`
      );

      setSearchRes(res.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [searchQuery]);

  // console.log(searchRes);

  return (
    <div className="flex flex-row bg-black h-full">
      <div className="basis-2/12">
        <Navbar />
      </div>
      <div className="basis-10/12 flex flex-col items-center mt-12 overflow-x-hidden scrollbar-hide">
        <div>
          <div className="tabs">
            <button
              className={`bg-white text-black mr-2 px-2 py-1 rounded ${
                activeTab === "user" && "btn-active"
              } cursor-pointer hover:opacity-80 transition-all`}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>
            <button
              className={`bg-white text-black mx-2 px-2 py-1 rounded ${
                activeTab === "products" && "btn-active"
              } cursor-pointer hover:opacity-80 transition-all`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
          </div>
          <form
            className="my-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded w-[20rem] border-[2px] border-white bg-transparent text-white outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="ml-4">
              <BlackBtn data="Search" />
            </button>
          </form>
          <p className="text-xl mb-4">Search Results:</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="max-h-[18rem] bg-[#2e2e2e] p-4 rounded overflow-y-scroll">
                {searchQuery === "" ? (
                  <p>Search Users</p>
                ) : searchRes.length === 0 ? (
                  <p>No Users Found</p>
                ) : (
                  searchRes.map((item) => (
                    <SearchResult key={item._id} searchResult={item} />
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
