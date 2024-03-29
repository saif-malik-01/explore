// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 h-screen">
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/">Explore All Models</Link>
          </li>
          <li>
            <Link to="/trending">Trending Models</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
