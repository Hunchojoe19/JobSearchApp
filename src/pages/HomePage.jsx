import styled from "@emotion/styled";
import { Pagination, Paper, Stack, Grid } from "@mui/material";
import jobnotfound from "../assets/jobnotfound.png";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { excerpt } from "../utilities";
import moment from "moment/moment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  // ...theme.typography,
  padding: "2rem",
  textAlign: "center",
  minHeight: "200px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 0 5px rgba(0,0,0,0.5)",
}));
const GETJOBSAPPLIED = ({ page, size }) =>
  `https://internship-central-6f407278bcda.herokuapp.com/api/job/recruiter?page=${page}&size=${size}`;
const HomePage = () => {
  const [details, setDetails] = useState([]);
  const { search } = useLocation();
  search;
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const navigate = useNavigate();

  const { userDetails } = useSelector((state) => state);

  "user details ", userDetails;
  const token = userDetails?.details?.token;

  const getJob = () => {
    fetch(GETJOBSAPPLIED({ page, size }), {
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
    getJob();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="mt-6 md:mt-12 h-[100%] lg:h-[100%]">
        <p className="font-bold text-lg font-['Inter'] flex justify-start items-center md:text-2xl border border-t-2 border-b-0 border-x-0 py-6">
          Jobs Added
        </p>
        <div className="w-full mt-2 border border-solid" />
        <div className="mt-12">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {details ? (
              details?.map((detail, id) => (
                <Grid item xs={12} sm={12} md={4} key={id}>
                  <Item>
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-2xl font-bold font-['mono'] md:text-4xl lg:text-3xl">
                        {detail.title.charAt(0).toUpperCase() +
                          detail.title.slice(1)}
                      </h1>
                      <p className="font-['Inter'] text-blue-500 text-xl font-bold mt-2 md:text-xl lg:text-sm">
                        {detail.country}
                      </p>
                      {/* <p className="mt-2 md:text-2xl lg:text-base">
                        Experience: {detail.experience}
                      </p> */}
                      <div className="flex justify-between items-center mt-2">
                        <p className="bg-green-300 p-2 rounded-full text-white md:text-xl lg:text-sm">
                          {detail.location}
                        </p>
                        <p className="bg-blue-300 p-2 rounded-full ml-2 text-white md:text-xl lg:text-sm">
                          {detail.type}
                        </p>
                      </div>
                      <span className="font-bold mt-2 md:text-xl lg:text-sm">
                        {/* skills: {detail.skills} */}
                      </span>
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
                          navigate(`/org_detail/${detail.reference}`, {
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
                  <div className="mt-12">
                    <Stack spacing={2}>
                      <Pagination
                        count={size}
                        page={page}
                        onChange={handleChange}
                      />
                    </Stack>
                  </div>
                </Grid>
              ))
            ) : (
              <div className="mt-12 block justify-center items-center md:flex md:justify-center md:items-center lg:ml-[10rem]">
                <img
                  src={jobnotfound}
                  className="h-42 md:h-96 md:flex md:justify-center"
                />

                <p className="font-bold text-xl mt-24 text-gray-400 font-['Inter'] flex justify-start items-center md:text-2xl">
                  You haven't Posted any job yet
                </p>
              </div>
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
