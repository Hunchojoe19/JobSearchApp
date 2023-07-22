import { Box, Grid } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOn from "@mui/icons-material/LocationOn";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { excerpt } from "../utilities";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  minHeight: "200px",
  border: "2px solid blue",
  borderRadius: "10px",
  marginBottom: "20px",
}));

const Home = () => {
  const details = [
    {
      name: "Backend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "₹ 10,00,000 - 20,00,000 PA.",
      experience: "2 - 5 years",
      skills: "Java, Python, C++",
      description: "Lorem ipsum dolor ",
      time: "1 day ago",
      period: "Part Time",
      type: "Remote",
    },
    {
      name: "Frontend Developer",
      company: "Amazon",
      location: "Bangalore",
      salary: "₹ 10,00,000 - 20,00,000 PA.",
      experience: "3 - 5 years",
      skills: "Java, Python, C++",
      description: "Lorem ipsum dolor ",
      time: "1 day ago",
      period: "Contract",
      type: "Remote",
    },
    {
      name: "Full Stack Developer",
      company: "Microsoft",
      location: "Bangalore",
      salary: "₹ 10,00,000 - 20,00,000 PA.",
      experience: "2 years",
      skills: "Java, Python, C++",
      description: "Lorem ipsum dolor ",
      time: "2 day ago",
      period: "Full Time",
      type: "Onsite",
    },
    {
      name: "Backend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "₹ 10,00,000 - 20,00,000 PA.",
      experience: "2 - 5 years",
      skills: "Java, Python, C++",
      description: "Lorem ipsum dolor ",
      time: "3 day ago",
      period: "Contract",
      type: "Hybrid",
    },
    {
      name: "Backend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "₹ 10,00,000 - 20,00,000 PA.",
      experience: "2 - 4 years",
      skills: "Java, Python, C++",
      description:
        "Lorem ipsum dolor ghdghgdjhdh hasbibsduididsbhds hdsbidsbiudbdsubdsds isdbviudbaiudsbdiubdui",
      time: "4 day ago",
      period: "Part Time",
      type: "Onsite",
    },
  ];
  return (
    <div className="container mx-auto mt-8">
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <div className=" flex flex-col justify-center items-center shadow-md">
          <div className="flex">
            <div className="relative flex mb-2 md:mb-0">
              <input
                type="text"
                className="w-[350px] h-[50px] p-2 pr-6 border border border-gray-300 placeholder-slate-400 focus:outline-none rounded-md block w-full shadow-lg sm:text-sm md:w-[400px] md:text-base"
                placeholder="remote"
              />
              <SearchIcon
                sx={{ position: "absolute", right: "1px", top: "10px" }}
              />
            </div>
            <div className="relative flex mb-6 md:mb-0">
              <input
                type="text"
                className="w-[350px] h-[50px] p-2 pr-6 border border border-gray-300 placeholder-slate-400 focus:outline-none rounded-md block w-full shadow-lg sm:text-sm md:text-base"
                placeholder="city, state, zip code or country"
              />
              <LocationOn
                sx={{ position: "absolute", right: "1px", top: "10px" }}
              />
            </div>
          </div>
          <button className="w-[140px] h-[60px] bg-blue-500 rounded-full font-normal text-white font-['Inter] mb-4 md:mt-4">
            Find a Job
          </button>
        </div>
        <div className="w-[150px] h-[50px] bg-gray-800 rounded-full mt-4 py-4 flex justify-center items-center px-4 text-white font-['Inter']">
          Jobs for You
        </div>
        <div className="h-[2px] bg-gray-300 mt-6 mb-6" />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(details).map((detail, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
              <Item>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-2xl font-bold font-['mono'] md:text-4xl lg:text-3xl">
                    {detail.name}
                  </h1>
                  <div className="flex justify-between items-center mt-2">
                    <p className="bg-green-300 p-2 rounded-full text-white md:text-xl lg:text-sm">
                      {detail.period}
                    </p>
                    <p className="bg-blue-300 p-2 rounded-full ml-2 text-white md:text-xl lg:text-sm">
                      {detail.type}
                    </p>
                  </div>
                  <p className="font-['Inter'] font-bold mt-2 md:text-xl lg:text-sm">
                    {detail.company} - {detail.location}
                  </p>
                  <p className="mt-2 md:text-2xl lg:text-base">
                    Experience: {detail.experience}
                  </p>
                  <span className="font-bold mt-2 md:text-xl lg:text-sm">
                    skills: {detail.skills}
                  </span>
                  <p className="font-bold mt-2 md:text-xl lg:text-base">
                    Description:
                  </p>
                  <div className="flex justify-start mb-2 md:text-xl lg:text-sm">
                    {excerpt(detail.description, 40)}
                  </div>
                  <button className="bg-gray-500 w-24 p-2 rounded-full text-white md:w-28">
                    Read More
                  </button>
                  <p className="mt-2 text-gray-400">Posted: {detail.time}</p>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
