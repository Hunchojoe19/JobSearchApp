import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/features/userSlice";

const LOGIN_URL =
  "https://internship-central-6f407278bcda.herokuapp.com/api/v6/authorize";
const Organization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const loginDetails = {
    email: formValues.email,
    password: formValues.password,
  };
  const handleAuth = (e) => {
    e.preventDefault();
    if (formValues.email && formValues.password) {
      const response = fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Object(loginDetails)),
      }).then((response) => {
        "res ", response.status;
        "res ", response.headers["X-Access-Token"];
        if (response.status === 204) {
          dispatch(
            saveUser({
              ...loginDetails,
              token: response.headers.get("X-Access-Token"),
            })
          );
          navigate("/organization_home");
        } else if (response.status === 400) {
          navigate("/login");
          setErr("Invalid Credentials");
        } else if (response.status === 403) {
          navigate("/login");
          setErr("UnAuthorized");
        } else {
          setErr("wrong email/password");
          navigate("/login");
        }
      });
    }
  };

  return (
    <section id="auth">
      <div className="container mx-auto md:h-[79vh] lg:h-[130vh]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center flex justify-center items-center">
            <h1 className="text-5xl text-blue-400 mt-12">Welcome Back</h1>
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
              onError={(errors) => errors}
            >
              <TextValidator
                sx={{
                  marginTop: "2rem",
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
                  marginTop: "2rem",
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
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <button className="mx-24 mt-12 bg-blue-500 text-white font-['Inter] font-bold text-center w-[200px] h-16 rounded">
                Sign In
              </button>
            </ValidatorForm>
          </div>
          <div>
            <>
              <div className="text-center justify-center mt-2 pt-2">
                <p className="small font-bold mt-2 pt-1 mb-4">
                  Don't have an account ?&nbsp;
                  <span
                    className="link-danger"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#298af2",
                    }}
                    onClick={() => navigate("/organization")}
                  >
                    Sign Up
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

export default Organization;
