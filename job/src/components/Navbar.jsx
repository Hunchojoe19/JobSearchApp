import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = React.useState("");

  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between ">
        <div className="pt-2 w-64 h-4 flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10 text-1.5xl font-['Inter']">
          <a href="/home" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="/jobs" className="hover:text-darkGrayishBlue">
            Search Jobs
          </a>
          <a href="/organization" className="hover:text-darkGrayishBlue">
            Recruiting?
          </a>
          {/* <a href="" className="hover:text-darkGrayishBlue">
            Follow Us
          </a> */}
        </div>
        <a
          href="/auth"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Job ?
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
          } flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="/home" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Search Jobs
          </a>
          <a href="/organization" className="hover:text-darkGrayishBlue">
            Recruiting?
          </a>
          <a href="/auth" className="hover:text-darkGrayishBlue">
            Looking For Job?
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
