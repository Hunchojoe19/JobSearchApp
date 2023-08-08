import React, { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Settings = () => {
  const [edit, setEdit] = useState(false);
  const { userDetails: select } = useSelector((state) => state);
  const [settingValue, setSettingsValue] = useState({
    firstName: select?.details?.firstName,
    lastName: select?.details?.lastName,
    email: select?.details?.email,
    phoneNo: select?.details?.phoneNo,
  });

  const handleChange = (e) => {
    setSettingsValue({ ...settingValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:flex-column lg:items-center"></div>
      <div className="mt-10 flex flex-column justify-center items-start">
        <h2 className="text-2xl font-bold font-['Inter'] md:text-3xl">
          Settings
        </h2>
      </div>
      {!edit ? (
        <>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              First Name
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              readOnly
              value={select?.details?.firstName}
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Last Name
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              readOnly
              value={select?.details?.lastName}
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Email
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              readOnly
              value={select?.details?.email}
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Phone Number
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              readOnly
              value={select?.details?.phoneNo}
            />
          </div>
          <div className="mt-6 flex justify-start items-center md:mt-8">
            <BusinessCenterIcon fontSize="medium" />
            <Link to="/applied_jobs" className="ml-4 text-lg text-gray-400">
              My Jobs
            </Link>
          </div>
          <div className="mt-16 mb-6 md:mb-24 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <button
              className="px-16 py-2 rounded-lg text-lg font-['Inter'] text-white bg-blue-500 ml-24 md:w-[400px] md:h-[70px] md:text-2xl"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              First Name
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              value={settingValue.firstName}
              onChange={(e) =>
                setSettingsValue({ ...settingValue, firstName: e.target.value })
              }
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Last Name
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              value={settingValue.lastName}
              onChange={(e) =>
                setSettingsValue({ ...settingValue, lastName: e.target.value })
              }
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Email
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              value={settingValue.email}
              onChange={(e) =>
                setSettingsValue({ ...settingValue, email: e.target.value })
              }
            />
          </div>
          <div className="mt-6 md:mt-8 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <h2 className="text-md font-bold font-['Inter'] md:text-xl md:ml-4">
              Phone Number
            </h2>
            <input
              type="text"
              className="border w-[350px] px-4 h-12 mt-4 focus:outline-none rounded-lg md:w-[700px] md:h-[70px] md:ml-4 md:text-xl"
              value={settingValue.phoneNo}
              onChange={(e) =>
                setSettingsValue({ ...settingValue, phoneNo: e.target.value })
              }
            />
          </div>
          <div className="mt-16 mb-6 md:mb-24 lg:flex lg:flex-column lg:items-center lg:justify-center">
            <button
              className="px-16 py-2 rounded-lg text-lg font-['Inter'] text-white bg-blue-500 ml-24 md:w-[400px] md:h-[70px] md:text-2xl "
              onClick={() => setEdit(false)}
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Settings;
