import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField } from "@mui/material";

const Organization = () => {
  const [signUp, setSignUp] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organizationName: "",
  });
  return (
    <section id="auth">
      <div className="container mx-auto md:h-[79vh] lg:h-[130vh]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center flex justify-center items-center">
            <h1 className="text-5xl text-blue-400 mt-12">
              {signUp ? "Welcome" : "Welcome Back"}
            </h1>
          </div>
          {signUp ? (
            <div className="flex flex-col justify-center items-center mt-24">
              <ValidatorForm
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={() => console.log({ formValues }, "submitted")}
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
                    marginTop: "2rem",
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
                    marginTop: "2rem",
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
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
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
                  validators={[
                    "required",
                    "minStringLength:8",
                    "matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
                  ]}
                  errorMessages={[
                    "this field is required",
                    "Password must have a minimum of 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number",
                  ]}
                />

                <button className="mx-24 mt-12 bg-blue-500 text-white font-['Inter] font-bold text-center w-[200px] h-16 rounded">
                  {signUp ? "Sign Up" : "Sign In"}
                </button>
              </ValidatorForm>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-24">
              <ValidatorForm
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={() => console.log({ formValues }, "submitted")}
                onError={(errors) => console.log(errors)}
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
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
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
                  {signUp ? "Sign Up" : "Sign In"}
                </button>
              </ValidatorForm>
            </div>
          )}
          <div>
            {!signUp ? (
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
                      onClick={() => setSignUp(true)}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </>
            ) : (
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
                      onClick={() => setSignUp(false)}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
