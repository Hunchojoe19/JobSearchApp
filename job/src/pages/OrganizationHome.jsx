import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

const OrganizationHome = () => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section id="organization">
        <div className="container mx-auto mt-6">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-nunito text-2xl md:ml-2 md:text-3xl">
              Post a Job
            </h1>
          </div>

          <div className="flex justify-start items-center mt-4 rounded-lg p-4 drop-shadow-2xl border">
            <FolderIcon fontSize="small" />
            <p className="text-lg ml-2 md:text-xl">Job Submission Form</p>
          </div>
          <div className="rounded-lg border flex flex-col justify-center border-t-1 mt-2 mb-4 items-start p-4 drop-shadow-2xl">
            <div className="mt-6">
              <p className="text-lg md:text-xl">Job Title</p>
              <input
                type="text"
                className="mt-4 w-[300px] h-[50px] placeholder-gray-300 placeholder-opacity-75 rounded-lg px-6 text-md border border-solid border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg md:text-xl">Job Type</p>
              <input
                placeholder="Full Time, internship, etc."
                type="text"
                className="mt-4 w-[300px] h-[50px] rounded-lg px-6 text-md border border-solid placeholder-gray-300 placeholder-opacity-75 border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg md:text-xl">Location</p>
              <input
                placeholder="Remote, Hybrid, etc."
                type="text"
                className="mt-4 w-[300px] h-[50px] rounded-lg px-6 text-md border border-solid placeholder-gray-300 placeholder-opacity-75 border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-sm font-bold md:text-xl">End date</p>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  minDate={new dayjs()}
                />
              </DemoContainer>
            </div>
            <div className="md:hidden mt-6">
              <TextField
                id="outlined-multiline-static"
                label="Job description"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{ width: "300px" }}
              />
            </div>
            <div className="sm:hidden md:flex md:mt-6">
              <TextField
                id="outlined-multiline-static"
                label="Job description"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{
                  width: "700px",
                  height: "200px",
                  marginTop: "2rem",
                  fontSize: "1.6rem",
                }}
              />
            </div>
          </div>
          <div className="md:hidden relative flex justify-center items-center mb-6 mt-8">
            <AddIcon
              fontSize="medium"
              style={{
                color: "white",
                left: "110px",
                top: "12px",
                position: "absolute",
              }}
            />
            <button className="rounded-full text-lg bg-blue-500 w-44 h-12 text-white flex justify-center items-center ">
              Post a Job
            </button>
          </div>
          <div className="sm:hidden md:relative md:flex md:justify-center md:items-center md:mb-6 md:mt-8">
            <button className="rounded-full text-lg bg-blue-500 w-44 h-12 text-white flex justify-center items-center hover:bg-blue-300">
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default OrganizationHome;
