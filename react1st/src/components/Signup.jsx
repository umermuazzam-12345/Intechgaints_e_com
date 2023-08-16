import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, } from "@mui/material";
import axios from "axios";
import './Signup.css'

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // image: Yup.string().required("Required")
});


const Signup = () => {

  return (<div className="Signupcontainer">
    <div className="Signupform-wrapper">
      <div className="Signupform">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: ""
            // image: null
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            const formdata = new FormData();
            formdata.append("firstname", values.firstname);
            formdata.append("lastname", values.lastname);
            formdata.append("email", values.email);
            formdata.append("password", values.password);
            // formdata.append("image", values.image);

            axios
              .post("http://localhost:5000/customer/register/", values, { headers: { 'Content-Type': 'application/json' } })
              .then((response) => {
                console.log("Response from server:", response.status);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <TextField
                name="firstname"
                label="First Name"
                variant="standard"
                error={Boolean(errors.firstname && touched.firstname)}
                helperText={
                  errors.firstname &&
                  touched.firstname &&
                  String(errors.firstname)
                }
                onChange={(event) => {
                  setFieldValue("firstname", event.target.value);
                }}
              />
              <TextField
                name="lastname"
                label="Last Name"
                variant="standard"
                type="text"
                error={Boolean(
                  errors.lastname && touched.lastname
                )}
                helperText={
                  errors.lastname &&
                  touched.lastname &&
                  String(errors.lastname)
                }
                onChange={(event) => {
                  setFieldValue("lastname", event.target.value);
                }}
              />
              <TextField
                name="email"
                label="Email"
                variant="standard"
                error={Boolean(errors.email && touched.email)}
                helperText={
                  errors.email && touched.email && String(errors.email)
                }
                onChange={(event) => {
                  setFieldValue("email", event.target.value);
                }}
              />
              <TextField
                name="password"
                label="Password"
                variant="standard"
                type="password"
                error={Boolean(errors.password && touched.password)}
                helperText={
                  errors.password && touched.password && String(errors.password)
                }
                onChange={(event) => {
                  setFieldValue("password", event.target.value);
                }}
              />

              <br />

              {/* <div><span><b>Profile Pic</b></span> :
                <input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files[0]);
                  }
                  } />

              </div> */}
              <br />


              <Button type="submit" variant="contained" >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="Signupimage-section">
        <div className="Signupimage-text"></div>
      </div>
    </div>
  </div>
  )
};

export default Signup;