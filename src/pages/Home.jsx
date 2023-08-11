import { Alert, Box, Button, Grid, Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOn from "@mui/icons-material/LocationOn";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { excerpt } from "../utilities";
import jobnotfound from "../assets/jobnotfound.png";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/features/userSlice";
import moment from "moment/moment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  minHeight: "200px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 0 5px rgba(0,0,0,0.5)",
}));

const GET_USER =
  "https://internship-central-6f407278bcda.herokuapp.com/api/v6/userDetails";
const GET_JOBS = ({ page, size }) =>
  `https://internship-central-6f407278bcda.herokuapp.com/api/job?page=${page}&size=${size}`;

const Home = () => {
  const [success, setSuccess] = useState(true);
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = useState({});
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [searchValues, setSearchValues] = useState({
    search: "",
    location: "",
  });

  const handleChange = (e) => {
    setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
  };

  // const details = [
  //   {
  //     id: 1,
  //     name: "Backend Developer",
  //     company: "Google",
  //     location: "Bangalore",
  //     salary: "₹ 10,00,000 - 20,00,000 PA.",
  //     experience: "2 - 5 years",
  //     skills: "Java, Python, C++",
  //     description: "Lorem ipsum dolor ",
  //     time: "1 day ago",
  //     period: "Part Time",
  //     type: "Remote",
  //     about:
  //       " We are an entertainment startup company focused on creating, developing, and producing original content for the music industry. We are looking for a creative, driven, and passionate individual to join our team as a Content Creator. The ideal candidate will be responsible for creating",
  //   },
  //   {
  //     id: 2,
  //     name: "Frontend Developer",
  //     company: "Amazon",
  //     location: "Bangalore",
  //     salary: "₹ 10,00,000 - 20,00,000 PA.",
  //     experience: "3 - 5 years",
  //     skills: "Java, Python, C++",
  //     description: "Lorem ipsum dolor ",
  //     time: "1 day ago",
  //     period: "Contract",
  //     type: "Remote",
  //     about:
  //       "As a content contributor, you will have the opportunity to showcase and develop your writing skills, gain industry exposure, and be part of a growing vibrant music and entertainment movement.",
  //   },
  //   {
  //     id: 3,
  //     name: "Full Stack Developer",
  //     company: "Microsoft",
  //     location: "Lagos",
  //     salary: "₹ 10,00,000 - 20,00,000 PA.",
  //     experience: "2 years",
  //     skills: "Java, Python, C++",
  //     description: "Lorem ipsum dolor ",
  //     time: "2 day ago",
  //     period: "Full Time",
  //     type: "Onsite",
  //     about:
  //       " We are an entertainment startup company focused on creating, developing, and producing original content for the music industry. We are looking for a creative, driven, and passionate individual to join our team as a Content Creator. The ideal candidate will be responsible for creating",
  //   },
  //   {
  //     id: 4,
  //     name: "Backend Developer",
  //     company: "Google",
  //     location: "Bangalore",
  //     salary: "₹ 10,00,000 - 20,00,000 PA.",
  //     experience: "2 - 5 years",
  //     skills: "Java, Python, C++",
  //     description: "Lorem ipsum dolor ",
  //     time: "3 day ago",
  //     period: "Contract",
  //     type: "Hybrid",
  //     about:
  //       " As a content contributor, you will have the opportunity to showcase and develop your writing skills, gain industry exposure, and be part of a growing vibrant music and entertainment movement.",
  //   },
  //   {
  //     id: 5,
  //     name: "Backend Developer",
  //     company: "Google",
  //     location: "Canada",
  //     salary: "₹ 10,00,000 - 20,00,000 PA.",
  //     experience: "2 - 4 years",
  //     skills: "Java, Python, C++",
  //     description:
  //       "Lorem ipsum dolor ghdghgdjhdh hasbibsduididsbhds hdsbidsbiudbdsubdsds isdbviudbaiudsbdiubdui nhbuiubiybibiubibubibubiub jkkiboinhobnoinbobnoiubibhiubiubiubiu  ",
  //     time: "4 day ago",
  //     period: "Part Time",
  //     type: "Onsite",
  //     about:
  //       " We are an entertainment startup company focused on creating, developing, and producing original content for the music industry. We are looking for a creative, driven, and passionate individual to join our team as a Content Creator. The ideal candidate will be responsible for creating",
  //   },
  // ];
  const [details, setDetails] = useState([]);
  const [jobs, setJobs] = useState(details);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userDetails: select } = useSelector((state) => state);
  "user details ", select.details;
  const token = select.details.token;

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

  const getJobList = () => {
    fetch(GET_JOBS({ page, size }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          setDetails(data?.data);
          data?.data;
          setSize(data?.data?.totalItems);
          setPage(data?.data?.totalPages);
        }
      })
    );
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  useEffect(() => {
    setJobs(details);
  }, [details]);

  useEffect(() => {
    getJobList();
  }, []);

  "user", user.data;
  const experience = user?.data?.experienceDtoList;
  const education = user?.data?.educationDtoList;

  const handleSearch = () => {
    const temp = details.filter(
      (x) =>
        x.title.toLowerCase().includes(searchValues.search.toLowerCase()) &&
        x.location.toLowerCase().includes(searchValues.location.toLowerCase())
    );
    setJobs(temp);
  };
  useEffect(() => {
    if (searchValues?.location === "" && searchValues?.search === "") {
      setJobs(details);
    } else if (searchValues.location || searchValues.search) {
      const temp = details.filter(
        (x) =>
          x.location
            .toLowerCase()
            .includes(searchValues.location.toLowerCase()) &&
          x.title.toLowerCase().includes(searchValues.search.toLowerCase())
      );
      if (temp.length) {
        setJobs(temp);
      } else {
        setJobs(details);
      }
    }
  }, [searchValues]);

  return (
    <div className="container mx-auto mt-8">
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <div className=" flex flex-col justify-center items-center shadow-lg">
          <div className="flex flex-col md:flex-row lg:flex-row mt-4">
            <div className="relative flex mb-2 md:mb-0">
              <input
                type="text"
                name="search"
                value={searchValues.search}
                onChange={handleChange}
                className="w-[350px] h-[50px] p-2 pr-6 border border border-gray-300 placeholder-slate-400 focus:outline-none rounded-md block w-full shadow-lg sm:text-sm md:w-[350px] lg:w-[400px] md:text-base"
                placeholder="Java, Teaching etc."
              />
              <SearchIcon
                fontSize="large"
                sx={{
                  position: "absolute",
                  right: "1px",
                  top: "10px",
                  paddingRight: "15px",
                }}
              />
            </div>
            <div className="relative flex mb-6 md:mb-0 md:mx-6">
              <input
                type="text"
                name="location"
                value={searchValues.location}
                onChange={handleChange}
                className="w-[357px] h-[50px] p-2 pr-6 border border border-gray-300 placeholder-slate-400 focus:outline-none rounded-md block w-full shadow-lg sm:text-sm md:w-[360px] lg:text-base lg:w-[400px]"
                placeholder="Remote"
              />
              <LocationOn
                fontSize="large"
                sx={{
                  position: "absolute",
                  right: "1px",
                  top: "10px",
                  paddingRight: "15px",
                }}
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="w-[140px] h-[50px] bg-blue-500 rounded-full mt-4 font-normal text-white font-['Inter] mb-4 md:mt-10"
          >
            Find a Job
          </button>
        </div>
        <div className="w-[150px] h-[50px] bg-gray-800 rounded-full mt-12 py-4 flex justify-center items-center px-4 text-white font-['Inter']">
          Jobs for You
        </div>
        <div className="h-[2px] bg-gray-300 mt-6 mb-6" />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobs.length ? (
            Array.from(jobs).map((detail, id) => (
              <Grid item xs={12} sm={12} md={4} key={id}>
                <Item>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-2xl font-bold font-['mono'] md:text-4xl lg:text-3xl">
                      {detail.title.charAt(0).toUpperCase() +
                        detail.title.slice(1)}
                    </h1>

                    <div className="flex justify-between items-center mt-2">
                      <p className="font-['Inter'] text-blue-500 text-xl font-bold mt-2 md:text-xl lg:text-sm">
                        {detail.country}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="bg-green-300 p-2 rounded-full text-white md:text-xl lg:text-sm">
                        {detail.location}
                      </p>
                      <p className="bg-blue-300 p-2 rounded-full ml-2 text-white md:text-xl lg:text-sm">
                        {detail.type}
                      </p>
                    </div>

                    <p className="font-bold mt-2 md:text-xl lg:text-base">
                      Description:
                    </p>
                    <div className="flex justify-start mb-2 md:text-xl lg:text-sm">
                      <p className="text-left ml-4">
                        {excerpt(detail.description, 100)}
                      </p>
                    </div>
                    <button
                      className="bg-gray-500 w-24 p-2 rounded-full text-white md:w-28"
                      onClick={() =>
                        navigate(`/details/${detail.reference}`, {
                          state: { detail },
                        })
                      }
                    >
                      Read More
                    </button>

                    <i className="mt-2 text-gray-400">
                      Application Deadline:{" "}
                      {moment(detail.endDate).format("LL")}
                    </i>
                  </div>
                </Item>
              </Grid>
            ))
          ) : (
            <div className="mt-12 flex justify-center items-center">
              <img
                src={jobnotfound}
                className="h-32 md:h-96 md:flex md:justify-center"
              />
              <p className="font-['Mono'] font-bold md:text-6xl">
                No Job Found!!!
              </p>
            </div>
          )}
        </Grid>
        {success && experience <= 0 && education <= 0 && (
          // <Snackbar
          //   open={open}
          //   autoHideDuration={6000}
          //   onClose={handleClose}
          //   anchorOrigin={{ vertical: "top", horizontal: "right" }}
          //   action={
          //     <Button color="inherit" size="small">
          //       Profile
          //     </Button>
          //   }
          // >
          //   <Alert
          //     onClose={handleClose}
          //     severity="success"
          //     sx={{ width: "100%" }}
          //   >
          //     Profile
          //   </Alert>
          // </Snackbar>
          <Snackbar
            open
            autoHideDuration={6000}
            message="Archived"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => navigate("/profile")}
              >
                update your profile
              </Button>
            }
            sx={{ bottom: { xs: 90, sm: 0 } }}
          />
        )}
      </Box>
    </div>
  );
};

export default Home;
