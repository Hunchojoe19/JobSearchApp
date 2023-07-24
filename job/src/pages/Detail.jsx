import { Grid } from "@mui/material";
import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();

  console.log(location.state);

  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col ">
        <div className="h-6 rounded-full flex border border-solid rounded-lg border-blue-800 justify-start items-center p-6">
          <h2 className="p-6 text-gray-600">Job Details</h2>
        </div>
        <div className="mt-6 rounded-lg border border-solid border-blue-600 mb-8">
          <div className="mt-4 border-blue-400 border border-solid">
            <div>
              <h2 className="text-left text-2xl p-4 font-bold font-['Inter']">
                {location.state.detail.name}
              </h2>
            </div>
            <div className="">
              <p className="font-mono text-xl ml-3 text-blue-500">
                {location.state.detail.company}
              </p>
              <p className="font-mono text-md ml-3 text-gray-400">
                {location.state.detail.location}
              </p>
              <p className="font-mono text-md ml-3 text-black-400 font-bold">
                Experience: {(" ", location.state.detail.experience)}
              </p>
            </div>
            <div className="flex justify-start ml-3 mt-4 items-center">
              <BusinessCenterIcon fontSize="medium" sx={{ fill: "gray" }} />
              <div className="flex flex-col">
                <p className="font-mono text-md ml-3 mt-6 text-black-400">
                  Job Type
                </p>
                <p className="font-mono text-md ml-3 mt-2 rounded-full px-2 text-white bg-blue-300 text-gray-400">
                  {location.state.detail.period}
                </p>
              </div>
            </div>
            <div className="flex border border-blue-300 mt-6 border-solid">
              <h2 className="p-4 font-bold text-xl font-mono text-gray-500">
                Job Summary
              </h2>
            </div>
            <div className="flex flex-col border border-blue-300 border-solid">
              <div className="flex flex-col">
                <h2 className="p-4 font-bold font-['Inter']">
                  Job Description/Requirements
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="mx-4 font-bold text-sm font-['Inter']">
                  About Company:
                </h2>
                <p className="mx-4 mt-2 text-left text-sm font-['Inter']">
                  {location.state.detail.about}
                </p>
              </div>
              <div className="flex flex-col mt-4">
                <h2 className="mx-4 font-bold text-sm font-['Inter']">
                  Responsibilities:
                </h2>
                <ul style={{ listStyle: "initial", marginLeft: "2rem" }}>
                  <li className="mx-4 mt-2 text-left text-sm font-['Inter']">
                    {location.state.detail.about}
                  </li>
                  <li className="mx-4 mt-2 text-left text-sm font-['Inter']">
                    {location.state.detail.about}
                  </li>
                  <li className="mx-4 mt-2 text-left text-sm font-['Inter']">
                    {location.state.detail.about}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
