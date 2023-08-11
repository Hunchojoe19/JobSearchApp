import { Grid } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const APPLY_FOR_JOB = ({ id }) =>
  `https://internship-central-6f407278bcda.herokuapp.com/api/application?jobId=${id}`;

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  location.state;

  const { userDetails } = useSelector((state) => state);

  const token = userDetails?.details?.token;

  const applyForJob = () => {
    fetch(APPLY_FOR_JOB({ id }), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        navigate("/application-success", {
          state: { detail: location.state.detail },
        });
      }
    });
  };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col ">
        <div className="h-6 rounded-full flex border border-solid rounded-lg border-blue-800 justify-start items-center p-6">
          <h2 className="p-6 text-gray-600">Job Details</h2>
        </div>
        <div className="mt-6 rounded-lg border border-solid border-blue-600 mb-8">
          <div className="mt-4 border-blue-400 border border-solid border-x-0">
            <div>
              <h2 className="text-left text-2xl p-4 font-bold font-['Inter'] lg:text-3xl">
                {location.state.detail.title.charAt(0).toUpperCase() +
                  location.state.detail.title.slice(1)}
              </h2>
              <p className="font-['Inter'] text-blue-500 text-xl p-4 font-bold mt-2 md:text-xl lg:text-sm">
                {location.state.detail.country}
              </p>
            </div>

            <div className="flex justify-start ml-3 mt-4 items-center">
              <BusinessCenterIcon fontSize="medium" sx={{ fill: "gray" }} />
              <div className="flex flex-col">
                <p className="font-['Inter'] text-md ml-3 mt-6 text-black-400 lg:text-lg">
                  Job Type
                </p>
                <p className="font-mono text-md ml-3 mt-2 rounded-full px-2 text-white bg-blue-300 text-gray-400">
                  {location.state.detail.type}
                </p>
              </div>
            </div>
            <div className="flex border border-blue-300 mt-6 border-solid border-x-0">
              <h2 className="p-4 font-bold text-xl font-mono text-gray-500">
                Job Summary
              </h2>
            </div>
            <div className="flex flex-col border border-blue-300 border-solid border-x-0">
              <div className="flex flex-col">
                <h2 className="p-4 font-bold font-['Inter'] lg:text-xl">
                  Job Description/Requirements
                </h2>
              </div>
              <div className="flex flex-col">
                <p className="mx-4 mt-2 text-left text-sm font-['Inter'] lg:text-lg">
                  {location.state.detail.description}
                </p>
              </div>
              <div className="mt-4 flex lg:mt-6">
                <p className="mx-4 lg:text-lg lg:mx-6"> Job Type: </p>
                <p className="font-mono text-md ml-3 rounded-full px-2 text-white bg-green-400 text-gray-400 lg:text-lg lg:ml-[-1rem]">
                  {location.state.detail.location}
                </p>
              </div>
              <div className="mt-12 flex justify-center items-center mb-6">
                <button
                  className="rounded-lg py-2 px-28 bg-blue-900 text-white font-['Inter'] lg:w-[420px] lg:text-lg"
                  onClick={applyForJob}
                >
                  Apply Now
                </button>
              </div>
              <div className="flex flex-col items-start border border-solid border-blue-400 border-x-0 border-b-0">
                <div className="mt-2 ml-3">
                  <h1 className="text-xl font-['Inter'] mb-4 font-bold">
                    Important Safety Tips
                  </h1>
                  <ul
                    style={{
                      listStyle: "initial",
                      marginLeft: "2rem",
                    }}
                  >
                    <li className="text-sm font-['Inter'] mb-4 lg:text-md">
                      Do not make any payment without confirming with the
                      Jobberman Customer Support Team.
                    </li>
                    <li className="text-sm font-['Inter'] mb-4 lg:text-md">
                      If you think this advert is not genuine, please report it
                      via the Report Job link below.
                    </li>
                  </ul>
                </div>
                <div className="flex container mt-6 mx-3 p-2 justify-center items-center rounded-lg  bg-gray-300 w-48 mb-8 cursor-pointer">
                  <FlagIcon fontSize="medium" />
                  <p className="rounded-lg text-black font-helvetica ml-3">
                    Report Job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
