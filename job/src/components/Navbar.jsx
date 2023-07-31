import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { Avatar, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState("");

  const { userDetails: select } = useSelector((state) => state);
  console.log("selkect ", select);
  const username = select.details.username;
  const email = select.details.email;

  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between ">
        <div className="pt-2 w-64 h-4 flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        {!username && (
          <div className="hidden md:flex md:space-x-10 md:justify-center md:items-center">
            <div className="hidden md:flex space-x-10 text-1.5xl font-['Inter'] md:mt-4 md:mr-12">
              <a href="/home" className="hover:text-darkGrayishBlue">
                Home
              </a>
              <a href="/jobs" className="hover:text-darkGrayishBlue">
                Search Jobs
              </a>
              <a href="/login" className="hover:text-darkGrayishBlue">
                Recruiting?
              </a>
            </div>
            <a
              href="/auth"
              className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight lg:px-12 lg:text-lg"
            >
              Job ?
            </a>
          </div>
        )}

        {username && (
          <div className="hidden md:flex justify-center items-center">
            <div className="hidden md:flex space-x-10 text-1.5xl mr-12 font-['Inter']">
              <a href="/home" className="hover:text-darkGrayishBlue">
                Home
              </a>
              <a href="/jobs" className="hover:text-darkGrayishBlue">
                Search Jobs
              </a>
            </div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              marginLeft="2rem"
            >
              <Avatar src="/broken-image.jpg" sx={{ marginLeft: "1rem" }} />
            </StyledBadge>

            <div className="ml-4">
              <p className="text-base  text-darkGrayishBlue">
                user id: {(" ", username)}
              </p>
              <p className="text-base text-darkGrayishBlue">{email}</p>
            </div>
            <div className="ml-24">
              <a
                href="/auth"
                className="px-12 py-4 bg-blue-600 rounded-full text-white font-bold font-['Inter'] hover:bg-blue-400"
              >
                Logout
              </a>
            </div>
          </div>
        )}
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
          <a href="/login" className="hover:text-darkGrayishBlue">
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
