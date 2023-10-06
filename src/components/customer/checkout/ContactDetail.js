import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles/CheckOutDetail.css";
import { useOutletContext } from "react-router-dom";

const ContactDetail = () => {
  const initialValues = {
    name: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
    address: Yup.string().required("Address is required"),
  });

  const [setContactDetail] = useOutletContext();

  const onSubmit = (values) => {
    // You can handle form submission logic here
    console.log("Form Data:", values);
    setContactDetail(values);
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
              <label htmlFor="name">Full Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                onBlur={() => {
                  if (
                    formik.values.name &&
                    formik.values.phoneNumber &&
                    formik.values.address
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onBlur={() => {
                  if (
                    formik.values.name &&
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
                    formik.values.name &&
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
