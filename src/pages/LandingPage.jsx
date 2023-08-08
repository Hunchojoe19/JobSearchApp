import React from "react";
import worker from "../assets/worker.png";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import { Menu, MenuItem } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section id="landing">
      <div className="container mx-auto flex flex-col w-full justify-center items-center md:flex-row-reverse">
        <div className="flex justify-center items-center mt-10 md:w-1/2 lg:ml-[6rem]">
          <img src={worker} alt="worker" className="w-full" />
        </div>
        <div className="flex flex-col text-center justify-center items-center md:w-1/2">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl mt-6 font-['Inter'] font-bold text-brightRedLight md:text-5xl xl:text-6xl">
              Hire The Best Intern within 24 Hours
            </h1>
            <p className="font-sans text-center font-light mt-6 md:text-2xl xl:mt-10 lg:text-3xl">
              Receive carefully screened terms from remote developers that best
              meet your time zone and work methodology.
            </p>
            <h3 className="text-2xl text-left font-['Inter'] text-cyan-600 mt-2 md:mt-4 lg:text-4xl lg:text-blue-600 lg:mt-[6rem] lg:mb-4">
              Find your new job today
            </h3>
            <p className="font-['Inter'] text-center font-light mt-2 lg:text-3xl">
              Thousands of jobs in the computer, engineering and technology
              sectors are waiting for you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-6 lg:mt-48">
            <button
              onClick={handleClick}
              className="flex justify-center items-center bg-blue-400 w-[150px] h-[60px] rounded-full text-white font-mono font-bold p-4 lg:w-[250px]"
            >
              Apply Now
            </button>
            <Menu
              id="basic-menu"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "menu-list",
              }}
            >
              <MenuItem onClick={() => navigate("/auth")}>
                Looking For Job?
              </MenuItem>
              <MenuItem onClick={() => navigate("/login")}>
                Looking To Hire?
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Hero />
      </div>
    </section>
  );
};

export default LandingPage;
