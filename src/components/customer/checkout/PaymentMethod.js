import React, { useEffect, useState } from "react";
import "./styles/PaymentMethod.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import axios from "axios";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

const PaymentMethod = () => {
  let [paymentMethods, setPaymentMethods] = useState([]);
  let [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

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
                      }}
                    />
                    {method.name}
                  </label>
                </div>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentMethod;
