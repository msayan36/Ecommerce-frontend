"use client";

import { useState } from "react";
import BlackBtn from "../BlackBtn";
import Navbar from "../navbar/Navbar";
import "./search.scss";

const Search = () => {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <div className="flex flex-row bg-black h-full">
      <div className="basis-2/12">
        <Navbar />
      </div>
      <div className="basis-10/12 flex flex-col items-center h-screen justify-center">
        <div className="tabs mb-8">
          <button
            className={`bg-white text-black mx-2 px-2 py-1 rounded ${
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
        <form>
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded w-[20rem] border-[2px] border-white bg-transparent text-white outline-none"
          />
          <button type="submit" className="ml-4">
            <BlackBtn data="Search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
