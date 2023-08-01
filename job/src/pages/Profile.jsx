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
  const [value, setValue] = React.useState({
    startvalue: null,
    endvalue: null,
  });
  const [formValues, setFormValues] = useState({
    tags: [],
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
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
                  Enubiak Joseph
                </h1>
                <div className="w-[70px] h-[70px] rounded-[50%] bg-gray-600 ml-8 md:w-[80px] md:h-[80px] lg:w-[60px] lg:h-[60px] lg:ml-[14rem]">
                  <p className="text-white text-4xl flex items-center mt-3 justify-center md:text-5xl lg:text-4xl">
                    EJ
                  </p>
                </div>
              </div>
              <div className="rounded-xl w-[360px] h-[150px] bg-neutral-200 mt-4 md:w-[600px] md:h-[200px] lg:h-[180px]">
                <div className="flex justify-start items-center ml-6 mt-4 md:hidden ">
                  <MailIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">
                    enubiakjoseph@gmail.com
                  </p>
                </div>
                <div className="sm:hidden md:flex justify-start md:items-center md:ml-6 mt-4">
                  <MailIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    enubiakjoseph@gmail.com
                  </p>
                </div>
                <div className="flex justify-start items-center ml-6 mt-4 md:hidden">
                  <LocalPhoneIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">+2348102661150</p>
                </div>
                <div className="sm:hidden md:flex md:justify-start md:items-center md:ml-6 md:mt-6">
                  <LocalPhoneIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    +2348102661150
                  </p>
                </div>
                <div className="flex justify-start items-center ml-6 mt-4 md:hidden">
                  <PlaceIcon fontSize="small" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500">Lagos.</p>
                </div>
                <div className="sm:hidden md:flex md:justify-start md:items-center md:ml-6 md:mt-6">
                  <PlaceIcon fontSize="medium" sx={{ fill: "gray" }} />
                  <p className="text-base ml-3 text-gray-500 md:text-2xl lg:text-xl">
                    Lagos.
                  </p>
                </div>
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
                        <input className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none" />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Degree</p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75"
                          placeholder="BA, BS, BAA etc."
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Field of study</p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75"
                          placeholder="Science, Engineering, etc."
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">Start date</p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold">End date</p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4 flex justify-center items-center">
                        <button className="bg-blue-500 text-white text-md font-['Roboto'] text-center px-12 py-2 rounded-lg">
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
                        <input className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]" />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Degree
                        </p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75 md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]"
                          placeholder="BA, BS, BAA etc."
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Field of study
                        </p>
                        <input
                          className="mt-2 w-[330px] h-[40px] border border-gray-300 rounded-lg px-4 focus:outline-none placeholder-gray-300 placeholder-opacity-75 md:w-[560px] md:h-[60px] md:text-xl lg:text-lg lg:h-[40px]"
                          placeholder="Science, Engineering, etc."
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          Start date
                        </p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={value.startvalue}
                            onChange={(newValue) => setValue(newValue)}
                          />
                        </DemoContainer>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-bold md:text-xl lg:text-lg">
                          End date
                        </p>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={value.endvalue}
                            onChange={(newValue) => setValue(newValue)}
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
