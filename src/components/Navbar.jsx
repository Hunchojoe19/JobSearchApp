import React, { useEffect } from "react";
import logo from "../assets/internship.jpg";
import { useSelector } from "react-redux";
import { Avatar, Badge, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

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
  const [user, setUser] = React.useState(null);

  const { userDetails: select } = useSelector((state) => state);
  "select ", select;
  const username = select.details.username;

  localStorage.setItem("user", JSON.stringify({ ...select.details }));
  const users = localStorage.getItem("user");
  const { token } = JSON.parse(users);
  const email = select.details.email;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between ">
        <div className="pt-2 w-64 h-4 flex justify-center items-center">
          <img src={logo} alt="logo" className="h-16" />
        </div>
        {!token && (
          <div className="hidden md:flex md:space-x-10 md:justify-center md:items-center">
            <div className="hidden md:flex space-x-10 text-1.5xl font-['Inter'] md:mt-4 md:mr-12">
              <Link to="/home" className="hover:text-darkGrayishBlue">
                Home
              </Link>
              <Link to="/jobs" className="hover:text-darkGrayishBlue">
                Search Jobs
              </Link>
              <Link to="/login" className="hover:text-darkGrayishBlue">
                Recruiting?
              </Link>
            </div>
            <Link
              to="/auth"
              className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight lg:px-12 lg:text-lg"
            >
              Job ?
            </Link>
          </div>
        )}

        {token && (
          <div className="hidden md:flex justify-center items-center">
            <div className="hidden md:flex space-x-10 text-1.5xl mr-12 font-['Inter']">
              <Link to="/home" className="hover:text-darkGrayishBlue">
                Home
              </Link>
              <Link to="/jobs" className="hover:text-darkGrayishBlue">
                Search Jobs
              </Link>
            </div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ marginLeft: "2rem" }}
            >
              <Avatar
                src="/broken-image.jpg"
                sx={{ marginLeft: "1rem", cursor: "pointer" }}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={opened}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  <div className="flex justify-center items-center">
                    <PersonIcon
                      fontSize="medium"
                      sx={{ marginRight: "0.5rem" }}
                    />
                    <p className="flex justify-center items-center font-bold">
                      Profile
                    </p>
                  </div>
                </MenuItem>

                <MenuItem onClick={() => navigate("/settings")}>
                  <div className="flex justify-center items-center">
                    <SettingsIcon
                      fontSize="medium"
                      sx={{ marginRight: "0.5rem" }}
                    />
                    <p className="flex justify-center items-center font-bold">
                      Settings
                    </p>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => navigate("/auth")}>
                  <div className="flex justify-center items-center">
                    <LogoutIcon
                      fontSize="medium"
                      sx={{ marginRight: "0.5rem" }}
                    />
                    <p className="flex justify-center items-center font-bold">
                      Logout
                    </p>
                  </div>
                </MenuItem>
              </Menu>
            </StyledBadge>

            <div className="ml-4">
              <p className="text-base  text-darkGrayishBlue">
                user name: {(" ", username)}
              </p>
              <p className="text-base text-darkGrayishBlue">{email}</p>
            </div>
            <div className="ml-24">
              <a
                href="/"
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
        {token && (
          <div
            id="menu"
            className={`${
              open ? "" : "hidden"
            } flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <Link to="/home" className="hover:text-darkGrayishBlue">
              Home
            </Link>
            <Link to="" className="hover:text-darkGrayishBlue">
              Search Jobs
            </Link>
            <div className="mt-4 flex flex-column justify-center items-center">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                sx={{ marginLeft: "2rem" }}
              >
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ marginLeft: "1rem", cursor: "pointer" }}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={opened}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => navigate("/profile")}>
                    <div className="flex justify-center items-center">
                      <PersonIcon
                        fontSize="medium"
                        sx={{ marginRight: "0.5rem" }}
                      />
                      <p className="flex justify-center items-center font-bold">
                        Profile
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={() => navigate("/settings")}>
                    <div className="flex justify-center items-center">
                      <SettingsIcon
                        fontSize="medium"
                        sx={{ marginRight: "0.5rem" }}
                      />
                      <p className="flex justify-center items-center font-bold">
                        Settings
                      </p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/auth")}>
                    <div className="flex justify-center items-center">
                      <LogoutIcon
                        fontSize="medium"
                        sx={{ marginRight: "0.5rem" }}
                      />
                      <p className="flex justify-center items-center font-bold">
                        Logout
                      </p>
                    </div>
                  </MenuItem>
                </Menu>
              </StyledBadge>
            </div>

            <p className="ml-2">{email}</p>
            <a href="/">Logout</a>
          </div>
        )}
        {!token && (
          <div
            id="menu"
            className={`${
              open ? "" : "hidden"
            } flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <Link to="/home" className="hover:text-darkGrayishBlue">
              Home
            </Link>
            <Link to="" className="hover:text-darkGrayishBlue">
              Search Jobs
            </Link>
            <Link to="/login" className="hover:text-darkGrayishBlue">
              Recruiting?
            </Link>
            <Link to="/auth" className="hover:text-darkGrayishBlue">
              Looking For Job?
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
