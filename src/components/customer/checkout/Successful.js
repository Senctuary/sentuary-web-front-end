import React, { useEffect, useState } from "react";
import "./styles/Successful.css";
import SubHeader from "../../common/SubHeader";
import { useLocation } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import ExploreButton from "../../common/buttons/ExploreButton";
import { Button } from "primereact/button";

const Successful = () => {
  const location = useLocation();
  const { requestBody, totalPrice, orderId } = location.state || {};
  const [accepted, setAccepted] = useState(false);

  const handleAcceptanceChange = (e) => {
    setAccepted(e.checked);
  };

  const displayVietQR = (amount) => {
    let description = `Senik${orderId}`;
    let BANK_ID = "970422";
    let ACCOUNT_NO = "0365960823";
    let TEMPLATE = "compact";
    let DESCRIPTION = description;
    let ACCOUNT_NAME = "NGUYEN TRUNG THONG";
    let url = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&addInfo=${DESCRIPTION}&accountName=${ACCOUNT_NAME}`;
    let qrcodeContainer = document.querySelector(".qr-container");
    qrcodeContainer.innerHTML = `
        <img src=${url} alt="VietQR" className="qr" />
        <p className="qr-description">
          Quét mã QR bằng ứng dụng ngân hàng để thanh toán. Vui lòng không thay đổi nội dung chuyển khoản.
        </p>
        <p>Chúng tôi sẽ liên hệ bạn thông qua số điện thoại, email để xác nhận đơn hàng sau khi thanh toán.</p>
      `;
    let contentContainer = document.querySelector(".content-container");
    contentContainer.style.display = "none";
  };

  const hideVietQR = () => {
    let qrcodeContainer = document.querySelector(".qrcode-container");
    qrcodeContainer.innerHTML = "";
    let contentContainer = document.querySelector(".content-container");
    contentContainer.style.display = "block";
  };

  useEffect(() => {
    if (JSON.parse(requestBody).paymentMethod === "2") {
      displayVietQR(totalPrice);
    }
  }, []);

  return (
    <div className="successful-container">
      <SubHeader title="Bạn đã đặt hàng thành công" progressBar="none" />
      <div className="qrcode-container" style={{textAlign: "center"}}>
        <div className="qr-container"></div>
        <div className="checkbox-term-container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Checkbox
              inputId="acceptConfirm"
              value="accept"
              checked={accepted}
              onChange={handleAcceptanceChange}
            />
            <label htmlFor="acceptConfirm" className="p-checkbox-label">
              Xác nhận đã chuyển tiền và không thay đổi nội dung chuyển khoản.
            </label>
          </div>
          <Button disabled={!accepted} onClick={hideVietQR}>
            Xác Nhận
          </Button>
        </div>
      </div>
      <div className="content-container">
        <h3>Chúc mừng bạn!!</h3>
        <p>
          Chúng tôi sẽ liên hệ bạn để xác nhận thông qua số điện thoại trong tối
          đa 2 ngày làm việc.
        </p>
        <p>Bạn sẽ sớm có trên tay chậu cây của riêng mình!</p>
        <h3>Cùng Senik sáng tạo chất riêng, bảo vệ môi trường nhé!</h3>
        <h2>Senik yêu bạn!</h2>
      </div>
    </div>
  );
};

export default Successful;
