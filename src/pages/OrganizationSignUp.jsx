import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const REGISTER_URL = "http://localhost:8080/api/v6/recruiter-signUp";

const OrganizationSignUp = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: " ",
    organizationName: "",
    size: "",
    location: "",
    industry: "",
  });
  const register = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    password: formValues.password,
    phoneNo: formValues.phoneNo,
    company: {
      name: formValues.organizationName,
      size: Number(formValues.size),
      location: formValues.location,
      industry: formValues.industry,
    },
  };
  const handleAuth = (e) => {
    e.preventDefault();

    if (
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      formValues.password
    ) {
      const response = fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Object(register)),
      })
        .then((response) => {
          if (response.status === 201) {
            navigate("/login");
          } else {
            setErr(response.errorMessages);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <section id="auth">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center flex justify-center items-center">
            <h1 className="text-5xl text-blue-400 mt-12">Welcome</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-24">
            <ValidatorForm
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={handleAuth}
              onError={(errors) => console.log(errors)}
            >
              <TextValidator
                sx={{ width: "350px" }}
                id="firstName"
                label="First Name"
                variant="outlined"
                value={formValues.firstName}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    firstName: e.target.value,
                  })
                }
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={formValues.lastName}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    lastName: e.target.value,
                  })
                }
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                id="organizationName"
                label="Organization Name"
                variant="outlined"
                value={formValues.organizationName}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    organizationName: e.target.value,
                  })
                }
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                label="Email"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  })
                }
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: e.target.value,
                  })
                }
                validators={[
                  "required",
                  "minStringLength:8",
                  "matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$",
                ]}
                errorMessages={[
                  "this field is required",
                  "Password must have a minimum of 8 characters, 1 uppercase letter, 1 lowercase letter, 1 special character and 1 number",
                ]}
              />
              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                id="phoneNo"
                label="Phone No"
                variant="outlined"
                placeholder="+234800000000"
                value={formValues.phoneNo}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    phoneNo: e.target.value,
                  })
                }
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                sx={{
                  marginTop: "3rem",
                  width: "350px",
                }}
                id="location"
                label="location"
                variant="outlined"
                placeholder="Remote, Hybrid, etc."
                value={formValues.location}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    location: e.target.value,
                  })
                }
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <div className="flex justify-center items-center">
                <TextValidator
                  sx={{
                    marginTop: "3rem",
                    width: "230px",
                  }}
                  id="industry"
                  label="industry"
                  variant="outlined"
                  value={formValues.industry}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      industry: e.target.value,
                    })
                  }
                  placeholder="fintech, health etc"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  sx={{
                    marginTop: "3rem",
                    width: "100px",
                    marginLeft: ".5rem",
                  }}
                  id="size"
                  label="size"
                  variant="outlined"
                  value={formValues.size}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      size: e.target.value,
                    })
                  }
                  placeholder="5,10,30 etc"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </div>

              <button className="mx-24 mt-12 bg-blue-500 text-white font-['Inter] font-bold text-center w-[200px] h-16 rounded">
                Sign Up
              </button>
            </ValidatorForm>
          </div>
          <div>
            <>
              <div className="text-center justify-content-center mt-2 pt-2">
                <p className="small font-bold mt-2 pt-1 mb-4">
                  Already have an account ?&nbsp;
                  <span
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "goldenrod",
                    }}
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSignUp;
