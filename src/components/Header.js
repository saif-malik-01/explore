import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch, LuPlus } from "react-icons/lu";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText) return;
    navigate(`/search?query=${searchText}`);
    setSearchText("");
  };

  return (
    <header className="bg-white h-[12vh] border border-l-0 flex gap-6 items-center">
      <Link to="/" className="w-1/6 py-6 pl-6 font-bold text-xl sm:text-3xl text-gray-700">
        EXPLORER
      </Link>
      <form
        className="bg-[#f8f8f8] px-4 py-2 rounded md:flex hidden items-center gap-2 lg:ml-4 ml-8"
        onSubmit={handleSubmit}
      >
        <LuSearch size={22} className="text-gray-400" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          title="Search for models"
          className="bg-[#f8f8f8] text-md placeholder-gray-400 outline-none min-w-[300px] text-gray-600"
        />
      </form>
      <Link
        to="/add"
        className="ml-auto flex items-center gap-2 mr-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <LuPlus size={22} />
        ADD MODEL
      </Link>
    </header>
  );
};

export default Header;
