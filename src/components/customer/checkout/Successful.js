import React from "react";
import "./styles/Successful.css";
import SubHeader from "../../common/SubHeader";

const Successful = () => {
  return (
    <div className="successful-container">
      <SubHeader title="Bạn đã đặt hàng thành công" progressBar="none" />
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
