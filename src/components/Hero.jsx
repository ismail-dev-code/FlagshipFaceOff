import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-12">
      <img
        className="w-full md:max-w-md mx-auto"
        src={bannerImg}
        alt="banner img"
      />
      <div className="text-center space-y-4">
        <h2 className="lg:text-7xl text-3xl font-thin text-gray-900">
          Browse, Search, View, Buy
        </h2>
        <p className="text-gray-500 w-full lg:max-w-2/5 mx-auto">
          Best place to browse, search, view details and purchase of top
          Faisal phones of the current time - FLProductsBD
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            setSearchText("");
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search by Name/Brand "
            className="bg-white lg:text-base text-xs border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          
          <Button type='submit' label="Search" />
        </form>
      </div>
    </div>
  );
};

export default Hero;
