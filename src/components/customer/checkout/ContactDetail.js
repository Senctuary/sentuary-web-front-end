import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles/CheckOutDetail.css";
import { useOutletContext } from "react-router-dom";

const ContactDetail = () => {
  const initialValues = {
    customerName: "",
    email: "",
    phoneNumber: "",
    address: "",
    shippedDate: "",
  };

  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
    address: Yup.string().required("Address is required"),
    shippedDate: Yup.date().required("Shipped Date is required"),
  });

  const [setContactDetail] = useOutletContext();

  const onSubmit = (values) => {
    // You can handle form submission logic here
    console.log("Form Data:", values);
    setContactDetail(values);
  };

  return (
    <div>
      <h2>Thông tin liên hệ</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Họ & tên</label>
              <Field
                type="text"
                id="customerName"
                name="customerName"
                onBlur={() => {
                  if (
                    formik.values.customerName &&
                    formik.values.phoneNumber &&
                    formik.values.address &&
                    formik.values.email &&
                    formik.values.shippedDate
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage
                name="customerName"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                onBlur={() => {
                  if (
                    formik.values.customerName &&
                    formik.values.phoneNumber &&
                    formik.values.address &&
                    formik.values.email &&
                    formik.values.shippedDate
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Số điện thoại</label>
              <Field
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                onBlur={() => {
                  if (
                    formik.values.customerName &&
                    formik.values.phoneNumber &&
                    formik.values.address &&
                    formik.values.email &&
                    formik.values.shippedDate
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
              <label htmlFor="address">Địa chỉ giao hàng</label>
              <Field
                type="text"
                id="address"
                name="address"
                onBlur={() => {
                  if (
                    formik.values.customerName &&
                    formik.values.phoneNumber &&
                    formik.values.address &&
                    formik.values.email &&
                    formik.values.shippedDate
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="shippedDate">Ngày giao hàng</label>
              <Field
                type="date"
                id="shippedDate"
                name="shippedDate"
                onBlur={() => {
                  if (
                    formik.values.customerName &&
                    formik.values.phoneNumber &&
                    formik.values.address &&
                    formik.values.email &&
                    formik.values.shippedDate
                  ) {
                    formik.submitForm();
                  }
                }}
              />
              <ErrorMessage
                name="shippedDate"
                component="div"
                className="error"
              />
            </div>
            {/* <button type="submit">Submit</button> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactDetail;
