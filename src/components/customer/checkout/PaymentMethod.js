import React, { useEffect, useState } from "react";
import "./styles/PaymentMethod.css";
import { ErrorMessage, Field, Formik } from "formik";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

const PaymentMethod = () => {
  let [paymentMethods, setPaymentMethods] = useState([]);
  let [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const location = useLocation();
  const { requestBody } = location.state || {};

  let initialValues = {
    paymentMethodId: "",
  };

  let getMethods = () => {
    axios
      .get(`${API_DOMAIN}/paymentMethods`)
      .then((response) => {
        if (response) {
          setPaymentMethods(response.data);
          console.log(paymentMethods);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMethods();
  }, []);

  const onSubmit = (values) => {
    // You can handle form submission logic here
    console.log("Form Data:", values);
    let fullRequestBody = { ...requestBody, ...values, deliveryOptionsId: "" };
    console.log("Request Body:", fullRequestBody);
    localStorage.setItem("fullRequestBody", JSON.stringify(fullRequestBody));
  };

  return (
    <div>
      <h2>Payment Methods</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>Select the payment:</div>
            <div role="group" aria-labelledby="my-radio-group">
              {paymentMethods.map((method) => (
                <div key={method.id}>
                  <label
                    className={`payment-method-label ${
                      selectedPaymentMethod === method.id ? "selected" : ""
                    }`}
                  >
                    <Field
                      type="radio"
                      name="paymentMethodId"
                      value={method.id}
                      onChange={() => {
                        setSelectedPaymentMethod(method.id);
                        formik.setFieldValue("paymentMethodId", method.id);
                        formik.submitForm();
                      }}
                    />
                    {method.name}
                  </label>
                </div>
              ))}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentMethod;
