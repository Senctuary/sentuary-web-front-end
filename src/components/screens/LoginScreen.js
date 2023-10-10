import React from "react";
import "./styles/LoginScreen.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN_LOCAL;
const apiUrl = "https://dummyjson.com/auth/login";
// const apiUrl = `${API_DOMAIN}api/auth/login`;

const LoginScreen = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          // email: values.username,
          password: values.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("jwtToken", data.token);
        navigate("/admin");
      } else {
        console.log("Invalid username or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="login-screen p-d-flex p-jc-center p-ai-center"
      style={{ height: "100vh" }}
    >
      <h1 style={{ marginBottom: "10rem" }}>WELCOME BACK TO SENIK, ADMIN!</h1>
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
