import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const REGISTER_URL =
  "https://internship-central-6f407278bcda.herokuapp.com/api/v6/signUp";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: " ",
  });

  const register = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    email: formValues.email,
    password: formValues.password,
    phoneNo: formValues.phoneNo,
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
            navigate("/auth");
          } else {
            setErr(response.errorMessages);
          }
        })
        .catch((err) => err);
    }
  };

  return (
    <section id="auth">
      <div className="container mx-auto md:h-[79vh] lg:h-[130vh]">
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
              onError={(errors) => errors}
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
                  marginTop: "2rem",
                  width: "350px",
                }}
                id="phoneNo"
                label="Phone No"
                variant="outlined"
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

              <button className="mx-24 mt-12 bg-blue-500 text-white font-['Inter] font-bold text-center w-[200px] h-16 rounded">
                Sign Up
              </button>
            </ValidatorForm>
          </div>
        </div>
        <div>
          <div className="text-center justify-content-center mt-2 pt-2">
            <p className="small font-bold mt-2 pt-1">
              Already have an account ?&nbsp;
              <span
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "goldenrod",
                }}
                onClick={() => navigate("/auth")}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
