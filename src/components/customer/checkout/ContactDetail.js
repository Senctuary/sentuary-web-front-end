import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactDetail.css";

const ContactDetail = () => {
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = (values) => {
    // You can handle form submission logic here
    console.log("Form Data:", values);
  };

  return (
    <div>
      <h2>Contact Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                onBlur={() => {
                  if (
                    formik.values.fullName &&
                    formik.values.phoneNumber &&
                    formik.values.address
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onBlur={() => {
                  if (
                    formik.values.fullName &&
                    formik.values.phoneNumber &&
                    formik.values.address
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                id="address"
                name="address"
                onBlur={() => {
                  if (
                    formik.values.fullName &&
                    formik.values.phoneNumber &&
                    formik.values.address
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactDetail;
