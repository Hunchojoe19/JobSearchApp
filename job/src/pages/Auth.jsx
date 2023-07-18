import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextField } from "@mui/material";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <section id="auth">
      <div className="container h-full mx-auto mt-8">
        <div className="flex flex-col justify-center items-center space-y-4">
          {signUp ? (
            <div className="flex flex-col justify-center items-center">
              <div className="my-4">
                <h1 className="text-4xl font-bold text-fuchsia-700">
                  {signUp ? "WELCOME" : "WELCOME BACK"}
                </h1>
              </div>
              <div className="my-8 mx-auto flex flex-col justify-center items-center">
                <ValidatorForm
                  onSubmit={() => console.log({ formValues }, "submitted")}
                  onError={(errors) => console.log(errors)}
                >
                  <TextValidator
                    sx={{ width: "350px", marginLeft: "1rem" }}
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
                  />
                  <TextValidator
                    sx={{
                      marginTop: "2rem",
                      width: "350px",
                      marginLeft: "1rem",
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
                      marginLeft: "1rem",
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
                  <TextField
                    sx={{
                      marginTop: "2rem",
                      width: "350px",
                      marginLeft: "1rem",
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
                  />

                  <button className="mx-24 mt-12 bg-blue-500 text-white font-['Inter] font-bold text-center w-[200px] h-16 rounded">
                    {signUp ? "Sign Up" : "Sign In"}
                  </button>
                </ValidatorForm>
              </div>
            </div>
          ) : (
            <div className="my-8 mx-auto flex flex-col justify-center items-center">
              <div className="my-4">
                <h1 className="text-4xl font-bold text-red-700">
                  {signUp ? "WELCOME TO JOB HUNT" : "WELCOME BACK"}
                </h1>
              </div>
              <ValidatorForm
                onSubmit={() => console.log({ formValues }, "submitted")}
                onError={(errors) => console.log(errors)}
              >
                <TextValidator
                  sx={{
                    marginTop: "2rem",
                    width: "350px",
                    marginLeft: "1rem",
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
                <TextField
                  sx={{
                    marginTop: "2rem",
                    width: "350px",
                    marginLeft: "1rem",
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
                  <p className="small font-bold mt-2 pt-1 mb-0">
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
                  <p className="small font-bold mt-2 pt-1 mb-0">
                    Already have an account ?&nbsp;
                    <span
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "red",
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

export default Auth;
