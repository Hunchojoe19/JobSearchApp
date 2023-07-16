import React from "react";
import logo from "../assets/logo-black.png";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-">
      <div className="flex justify-between items-center">
        <div className="h-32 w-32 pt-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="/" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="/about" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/auth" className="hover:text-darkGrayishBlue">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
