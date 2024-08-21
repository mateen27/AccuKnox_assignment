import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="bg-white text-black p-4 flex items-center justify-between">
      {/* Left Side: Logo and Navigation Links */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://www.hashicorp.com/_next/image?url=https:%2F%2Fwww.datocms-assets.com%2F2885%2F1680281649-logo-light-back_web_upl.png&w=3840&q=75"
            alt="Logo"
            className="h-6 sm:h-8"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black-500 font-semibold">Home</a>
          <span className="text-gray-500">{">"}</span>
          <a href="#" className="text-black-700 font-bold">Dashboard</a>
        </div>
      </div>

      {/* Right Side: Search Bar and Add Button */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <SearchBar />

        {/* Add Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md hidden sm:block"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      {/* Drawer Component */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </header>
  );
};

export default Header;
