import React, { useEffect, useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const GET_USER =
  "https://internship-central-6f407278bcda.herokuapp.com/api/v6/userDetails";
const POST_JOB =
  "https://internship-central-6f407278bcda.herokuapp.com/api/job/create";

const OrganizationHome = () => {
  const [value, setValue] = React.useState(null);
  const [createJobValues, setCreateJobValues] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
  });

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userDetails: select } = useSelector((state) => state);

  "user details ", select?.details;
  "token ", select?.details?.token;
  const token = select?.details?.token;

  const postData = {
    title: createJobValues.title,
    description: createJobValues.description,
    location: createJobValues.location.toUpperCase(),
    type: createJobValues.type.toUpperCase(),
    country: createJobValues.country,
    endDate: value?.format("YYYY-MM-DD"),
    status: "ACTIVE",
  };

  const getUserDetails = () => {
    fetch(GET_USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        setUser(data);
        dispatch(saveUser({ ...select.details, ...data?.data }));
      })
    );
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const postJob = (e) => {
    e.preventDefault();
    fetch(POST_JOB, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    }).then((res) => {
      if (res.status === 201) {
        ("job created successfully");
        navigate("/job_success");
      }
    });
    // ("post data ", postData);
  };

  "first name ", user?.data?.firstName;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section id="organization">
        <div className="container mx-auto mt-6">
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-nunito text-2xl md:ml-2 md:text-3xl">
              Post a Job
            </h1>
            <Link to="/homepage" className="text-blue-400 mt-6 underline">
              Home
            </Link>
          </div>

          <div className="flex justify-start items-center mt-4 rounded-lg p-4 drop-shadow-2xl border">
            <FolderIcon fontSize="small" />
            <p className="text-lg ml-2 md:text-xl">Job Submission Form</p>
          </div>
          <div className="rounded-lg border flex flex-col justify-center border-t-1 mt-2 mb-4 items-start p-4 drop-shadow-xl">
            <div className="mt-6">
              <p className="text-lg md:text-xl">Job Title</p>
              <input
                type="text"
                value={createJobValues.title}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    title: e.target.value,
                  })
                }
                className="mt-4 w-[300px] h-[50px] placeholder-gray-300 placeholder-opacity-75 rounded-lg px-6 text-md border border-solid border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg md:text-xl">Country</p>
              <input
                type="text"
                value={createJobValues.country}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    country: e.target.value,
                  })
                }
                className="mt-4 w-[300px] h-[50px] placeholder-gray-300 placeholder-opacity-75 rounded-lg px-6 text-md border border-solid border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg md:text-xl">Job Type</p>
              <input
                value={createJobValues.type}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    type: e.target.value,
                  })
                }
                placeholder="Full Time, internship, etc."
                type="text"
                className="mt-4 w-[300px] h-[50px] rounded-lg px-6 text-md border border-solid placeholder-gray-300 placeholder-opacity-75 border-gray-200 focus:outline-none md:w-[700px] md:h-[70px]"
              />
            </div>
            <div className="mt-6">
              <p className="text-lg md:text-xl">Location</p>
              <input
                value={createJobValues.location}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    location: e.target.value,
                  })
                }
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
                value={createJobValues.description}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    description: e.target.value,
                  })
                }
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
                value={createJobValues.description}
                onChange={(e) =>
                  setCreateJobValues({
                    ...createJobValues,
                    description: e.target.value,
                  })
                }
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
            <button
              className="rounded-full text-lg bg-blue-500 w-44 h-12 text-white flex justify-center items-center "
              onClick={postJob}
            >
              Post a Job
            </button>
          </div>
          <div className="sm:hidden md:relative md:flex md:justify-center md:items-center md:mb-6 md:mt-8">
            <button
              className="rounded-full text-lg bg-blue-500 w-44 h-12 text-white flex justify-center items-center hover:bg-blue-300"
              onClick={postJob}
            >
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default OrganizationHome;
