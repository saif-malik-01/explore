import React from "react";
import { Link } from "react-router-dom";
import { LuHome, LuTrendingUp, LuHeart } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-white h-screen border border-t-0">
      <nav className="mt-4">
        <ul className="list-none">
          <li>
            <Link
              to="/"
              className="py-4 px-6 flex items-center gap-4 text-gray-600 font-semibold hover:bg-gray-50"
            >
              <LuHome />
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="py-4 px-6 flex items-center gap-4 text-gray-600 font-semibold hover:bg-gray-50"
            >
              <LuTrendingUp />
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="/favorite"
              className="py-4 px-6 flex items-center gap-4 text-gray-600 font-semibold hover:bg-gray-50"
            >
              <LuHeart />
              Favorite
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
