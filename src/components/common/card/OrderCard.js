import React, { useRef } from "react";
import { useFormik } from "formik";
import { SelectButton } from "primereact/selectbutton";
import { Toast } from "primereact/toast";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const OrderDetailCard = ({ order }) => {
  const toast = useRef(null);
  const options = ["Pending", "Approved", "Rejected"];

  const formik = useFormik({
    initialValues: {
      item: `${order.status}`
    },
    validate: (data) => {
      let errors = {};

      if (!data.item) {
        errors.item = "Engine State is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      // You can perform any additional submission logic here if needed.
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const handleSelectChange = (e) => {
    formik.setFieldValue("item", e.value);
    if (e.value) {
      toast.current.show({
        severity: "success",
        summary: "Form Submitted",
        detail: e.value,
      });
    }
  };
  return (
    <div style={{marginTop: '2rem', padding: '2rem', borderRadius: "8px", background: "rgba(255, 255, 255, 0.25)" }}>
      <div className="order-information">
        <p>Customer name: {order.name}</p>
        <p>Total price: {order.totalPrice}</p>
        <p>Total quantity: {order.totalQuantity}</p>
        <p>Phone: {order.phone}</p>
        <p>Address: {order.address}</p>
      </div>
      <div className="order-action">
        <div className="status-card flex justify-content-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-column align-items-flex-start gap-2"
          >
            <Toast ref={toast} />
            <label htmlFor="item">Status</label>
            <SelectButton
              id="item"
              name="item"
              value={formik.values.item}
              options={options}
              onChange={handleSelectChange}
            />
            {getFormErrorMessage("item")}
          </form>
        </div>
        <div>
          <Link className="detail-button" to={"/admin/order-detail"}>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailCard;
