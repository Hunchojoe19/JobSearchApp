import React from "react";
import success from "../assets/success.gif";
import { useLocation, useNavigate } from "react-router-dom";

const ApplicationSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  "location ", location.state;
  return (
    <div className="container mx-auto p-6">
      <div className="mt-6 flex flex-col justify-center items-center md:mt-12">
        <p className="font-bold text-lg font-['Inter'] flex justify-center items-center md:text-xl">
          You have successfully applied for the position of{" "}
          {location.state.detail.title}
        </p>

        <img
          src={success}
          alt="successful"
          className="md:flex md:justify-center md:ml-28 md:mt-20 lg:ml-[0rem]"
        />
        <p className="flex justify-center items-center text-2xl font-['Roboto'] text-blue-400">
          Application Successful
        </p>
      </div>
      <div className="mt-6 mb-4 md:mt-20 md:flex md:justify-center md:items-center">
        <button
          className="w-[300px] h-[70px] bg-blue-500 text-white font-roboto font-bold text-xl rounded-lg"
          onClick={() => navigate("/homepage")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
