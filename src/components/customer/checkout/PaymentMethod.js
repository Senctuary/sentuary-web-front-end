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
  const { requestBody, totalPrice } = location.state || {};

  let initialValues = {
    paymentMethod: "0",
  };

  let getMethods = () => {
    axios
      .get(`${API_DOMAIN}api/orders/payments`)
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
    let fullRequestBody = { ...requestBody, ...values };
    console.log("Request Body:", fullRequestBody);
    localStorage.setItem("fullRequestBody", JSON.stringify(fullRequestBody));
  };

  return (
    <div>
      <h2>Phương thức thanh toán:</h2>
      {/* <strong style={{ color: "red" }}>
        Vì các tính năng chưa hoàn thiện, chúng tôi khuyến nghị bạn chọn phương
        thức COD (Cash On Delivery)
      </strong> */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>Vui lòng chọn phương thức:</div>
            <div className="form-container" role="group" aria-labelledby="my-radio-group">
              {paymentMethods.map((method) => (
                <div key={method.id}>
                  <label
                    className={`payment-method-label ${
                      selectedPaymentMethod === method.id ? "selected" : ""
                    }`}
                  >
                    <Field
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      onChange={() => {
                        setSelectedPaymentMethod(method.id);
                        formik.setFieldValue(
                          "paymentMethod",
                          method.id.toString()
                        );
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

      <h1>{totalPrice}</h1>
    </div>
  );
};

export default PaymentMethod;
