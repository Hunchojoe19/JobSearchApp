import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = React.useState("");

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2 w-64 h-24 flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Contact
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Follow Us
          </a>
        </div>
        <a
          href=""
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            open ? "open" : !open
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            open ? "" : "hidden"
          } absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Contact
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Follow Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
