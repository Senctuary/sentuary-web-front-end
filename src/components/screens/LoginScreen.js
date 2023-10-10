import React from "react";
import "./styles/LoginScreen.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik"; 

import * as Yup from "yup"; 
const apiUrl = "https://633c28adf11701a65f705dd1.mockapi.io/admin"; 

const LoginScreen = () => {
  const navigate = useNavigate();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const handleLogin = async (values, { setSubmitting, setFieldError }) => {

    try {
      const response = await fetch(`${apiUrl}`);
  
      if (response.ok) {
        const data = await response.json();
          // Check if the username and password match any user in the response data
          const userMatch = data.find(
            (user) =>
              user.username === values.username && user.password === values.password
          );
  
          if (userMatch) {
            // Set the JWT token in local storage
            // const token = sign(userMatch, process.env.REACT_APP_SECRET_KEY, {
            //   expiresIn: "1d",
            // });
            localStorage.setItem("jwtToken", data);
            console.log(data.token);
            navigate("/admin");
          } else {
            setFieldError("password", "Invalid username or password");
          }
      } else {
        console.error("API Error - Response Status:", response.status);
        const responseText = await response.text();
        console.error("API Error - Response Body:", responseText);
        setFieldError("password", "Error fetching user data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setFieldError("password", "An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="login-screen p-d-flex p-jc-center p-ai-center"
      style={{ height: "100vh" }}
    >
      <h1 style={{ marginBottom: "10rem" }}>
        WELCOME BACK TO SENIK, ADMINNAME
      </h1>
      <div className="login-form">
        <Card title="Login" style={{ width: "400px" }}>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="p-fluid">
                  <div className="p-field">
                    <label htmlFor="username">Username</label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      as={InputText}
                      className={`p-inputtext ${
                        errors.username && touched.username ? "p-invalid" : ""
                      }`}
                    />
                    <small className="p-error">
                      {errors.username && touched.username && errors.username}
                    </small>
                  </div>
                  <div className="p-field">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      as={InputText}
                      className={`p-inputtext ${
                        errors.password && touched.password ? "p-invalid" : ""
                      }`}
                    />
                    <small className="p-error">
                      {errors.password && touched.password && errors.password}
                    </small>
                  </div>
                  <Button label="Login" type="submit" disabled={isSubmitting} />
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
