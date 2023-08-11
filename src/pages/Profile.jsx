import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import pdf from "../assets/pdf.png";
import { useSelector } from "react-redux";

const ADD_EDUCATION =
  "https://internship-central-6f407278bcda.herokuapp.com/api/education/add";

const POST_CV =
  "https://internship-central-6f407278bcda.herokuapp.com/api/cv/upload";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  width: "100%",
  borderRadius: "5px",
  marginBottom: "20px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Profile = () => {
  const [file, setFile] = useState(null);
  const [expanded, setExpanded] = React.useState("panel1");
  const [endValue, setEndValue] = useState(null);
  const [startValue, setStartValue] = useState(null);

  const [formValues, setFormValues] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: startValue,
    endDate: endValue,
  });

  "dates ", endValue, startValue;

  const { userDetails: select } = useSelector((state) => state);
  "user details ", select.details;
  const email = select?.details?.email;
  const phone = select?.details?.phoneNo;
  const firstName = select?.details?.firstName;
  const lastName = select?.details?.lastName;
  const token = select?.details?.token;
  const education = select?.details?.educationDtoList;
  const last = education.length - 1;
  "education ", education[last]?.school;
  "education ", education[last]?.degree;
  "education ", education[last]?.fieldOfStudy;
  "education ", education[last]?.startDate;
  "education ", education[last]?.endDate;
  "experience ", education;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    "file ", file;
  };

  const userProfile = {
    school: formValues.school,
    degree: formValues.degree.toUpperCase(),
    fieldOfStudy: formValues.fieldOfStudy.toUpperCase(),
    startDate: startValue?.toISOString().slice(0, 10),
    endDate: endValue?.toISOString().slice(0, 10),
  };

  const uploadCv = () => {
    const formData = new FormData();
    formData.append("cv", file);
    // formData.append("userProfile", JSON.stringify(userProfile));
    "form data ", formData;
    fetch(POST_CV, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  };

  const postEducation = () => {
    "data backend", userProfile;
    fetch(ADD_EDUCATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userProfile),
    });
  };

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", { month: "short" });
  }
  const date = new Date();
  const formatedDate =
    date.getDate() +
    "-" +
    getMonthName(String(date.getMonth())) +
    "-" +
    date.getFullYear();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className="profile">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-start md:flex-row md:justify-center md:items-center">
            <div className="flex flex-col justify-center items-center md:mt-12">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl text-left font-['Roboto'] font-bold ml-[-2rem] md:text-5xl lg:text-4xl lg:ml-[-2rem]">
                  {firstName + " " + lastName}
                </h1>
                <div className="w-[70px] h-[70px] rounded-[50%] bg-gray-600 ml-8 md:w-[80px] md:h-[80px] lg:w-[60px] lg:h-[60px] lg:ml-[14rem]">
                  <p className="text-white text-4xl flex items-center mt-3 justify-center md:text-5xl lg:text-4xl">
                    {firstName?.charAt(0).toUpperCase() +
                      lastName?.charAt(0).toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="rounded-xl w-[360px] h-[150px] bg-neutral-200 mt-4 md:w-[600px] md:h-[200px] lg:h-[180px]">
                <div className="flex justify-start items-center ml-6 mt-8 md:hidden ">
                  <MailIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">{email}</p>
                </div>
                <div className="sm:hidden md:flex justify-start md:items-center md:ml-6 mt-8">
                  <MailIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    {email}
                  </p>
                </div>
                <div className="flex justify-start items-center ml-6 mt-8 md:hidden">
                  <LocalPhoneIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">{phone}</p>
                </div>
                <div className="sm:hidden md:flex md:justify-start md:items-center md:ml-6 md:mt-8">
                  <LocalPhoneIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    {phone}
                  </p>
                </div>
                {/* <div className="flex justify-start items-center ml-6 mt-4 md:hidden">
                  <PlaceIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">Lagos.</p>
                </div>
                <div className="sm:hidden md:flex md:justify-start md:items-center md:ml-6 md:mt-6">
                  <PlaceIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    Lagos.
                  </p>
                </div> */}
              </div>
              <div className="mt-4 text-2xl text-left">
                <p className="font-bold text-left ml-[-10rem] font-['Roboto'] md:text-4xl md:mt-6 md:ml-[-15rem] lg:text-2xl lg:ml-[-18rem]">
                  Resume
                </p>
              </div>
              <div className="mt-4">
                {file ? (
                  <div className="w-[355px] p-4 border border-solid flex items-center border-gray-300 rounded-xl display:none md:w-[600px]">
                    <img
                      src={pdf}
                      alt="pdf"
                      className="w-[50px] md:w-[80px] lg:w-[50px]"
                    />
                    <div className="flex flex-col justify-center items-start">
                      <p className="ml-4 md:text-2xl lg:text-lg">{file.name}</p>
                      <p className="ml-4 text-sm text-gray-400 md:text-xl lg:text-base">
                        {formatedDate}
                      </p>
                    </div>
                  </div>
                ) : (
                  <input
                    type="file"
                    name="file"
                    onChange={handleFile}
                    className="w-[355px] p-4 border border-solid border-gray-300 rounded-xl display:none md:w-[600px]"
                  />
                )}
                {file && <p className="md:text-xl lg:text-base">{file.name}</p>}
              </div>
              <div className="mt-8">
                <button
                  className="flex justify-center items-center w-[350px] h-[50px] text-lg text-white bg-blue-500 rounded-xl"
                  onClick={uploadCv}
                >
                  Upload Resume
                </button>
              </div>
              <div className="mt-4 text-2xl text-left">
                <p className="font-bold text-left font-['Roboto'] ml-[-2.5rem] md:text-4xl md:mt-8 lg:text-2xl lg:ml-[-18rem]">
                  Improve your job matches
                </p>
              </div>
              <hr className="bg-gray-600 w-[350px] mt-3 border border-solid md:w-[600px] md:mt-6" />
              <div className="mt-4 md:hidden">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <div className="flex flex-col justify-center items-start">
                      <Typography>Qualification </Typography>

                      <p className="text-base text-gray-400">
                        Highlight your most relevant skills and experience
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="mt-2">
                      <p className="text-md font-bold">
                        Most recent work experience
                      </p>
                      <input className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none" />
                    </div>

                    <div className="mt-16">
                      <div className="mb-2">
                        <p className="text-md font-bold">Education:</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-bold">Name of University</p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none"
                          defaultValue={education[last]?.school}
                          value={formValues.school}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              school: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Degree</p>
                        <select
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75"
                          placeholder="BA, BS, BAA etc."
                          defaultValue={education[last]?.degree}
                          value={formValues.degree}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              degree: e.target.value,
                            })
                          }
                        >
                          <option value=""></option>
                          <option value="BA">BA</option>
                          <option value="BASC">BASC</option>
                          <option value="BARCH">BARCH</option>
                          <option value="BBA">BBA</option>
                          <option value="BAF">BAF</option>
                          <option value="ASSOCIATE">ASSOCIATE</option>
                        </select>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Field of study</p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75"
                          placeholder="Science, Engineering, etc."
                          defaultValue={education[last]?.fieldOfStudy}
                          value={formValues.fieldOfStudy}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              fieldOfStudy: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Start date</p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            dateFormat="yyyy-MM-dd"
                            defaultValue={education[last]?.startDate}
                            value={startValue}
                            onChange={(dateValue) => {
                              setStartValue(dateValue);
                            }}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">End date</p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            defaultValue={education[last]?.endDate}
                            value={endValue}
                            onChange={(newValue) => {
                              setEndValue(newValue);
                            }}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4 flex justify-center items-center">
                        <button
                          className="bg-blue-500 text-white text-md font-['Roboto'] text-center px-12 py-2 rounded-lg"
                          onClick={postEducation}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="sm:hidden md:flex md:mt-4">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{ width: "600px", marginBottom: "9.5rem" }}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <div className="sm:hidden md:flex md:flex-col md:justify-center md:items-start">
                      <p className="md:text-2xl lg:text-xl"> Qualification</p>

                      <p className="text-base text-gray-400 md:text-xl lg:text-base">
                        Highlight your most relevant skills and experience
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="mt-2">
                      <p className="text-md font-bold md:text-2xl lg:text-lg">
                        Most recent work experience
                      </p>
                      <input className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]" />
                    </div>
                    <div className="mt-16">
                      <div className="mb-2">
                        <p className="text-md font-bold md:text-2xl lg:text-xl">
                          Education:
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Name of University
                        </p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]"
                          defaultValue={education[last]?.school}
                          value={formValues.school}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              school: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Degree
                        </p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75 md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]"
                          placeholder="BA, BS, BAA etc."
                          defaultValue={education[last]?.degree}
                          value={formValues.degree}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              degree: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Field of study
                        </p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75 md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]"
                          placeholder="Science, Engineering, etc."
                          defaultValue={education[last]?.fieldOfStudy}
                          value={formValues.fieldOfStudy}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              fieldOfStudy: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Start date
                        </p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            defaultValue={education[last]?.startDate}
                            value={startValue}
                            onChange={(newValue) => setStartValue(newValue)}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          End date
                        </p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            defaultValue={education[last]?.endDate}
                            value={endValue}
                            onChange={(newValue) => setEndValue(newValue)}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-16 flex justify-center items-center">
                        <button className="bg-blue-500 text-white text-md font-['Roboto'] hover:bg-blue-300 text-center px-12 py-2 rounded-lg md:px-24 md:py-4 md:text-2xl lg:text-xl lg:py-2 lg:px-16">
                          Save
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default Profile;
