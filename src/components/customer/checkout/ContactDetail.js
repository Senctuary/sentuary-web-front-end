import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles/CheckOutDetail.css";
import { useOutletContext } from "react-router-dom";
import { addDays } from "date-fns";

const ContactDetail = () => {
  const initialDate = new Date();
  initialDate.setDate(initialDate.getDate() + 4);

  const year = initialDate.getFullYear();
  const month = (initialDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed, so we add 1
  const day = initialDate.getDate().toString().padStart(2, "0");

  const defaultDate = `${year}-${month}-${day}`;

  const initialValues = {
    customerName: "",
    email: "",
    phoneNumber: "",
    address: "",
    shippedDate: defaultDate,
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
    shippedDate: Yup.date(),
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
          </form>
        )}
      </Formik>
      <p className="estimat-time">
        Đơn hàng có thể được giao sau ngày: {day}/{month}/{year}
      </p>
    </div>
  );
};

export default ContactDetail;
