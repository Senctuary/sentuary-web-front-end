// import React, { useState } from "react"; 
// import "../styles/Buttons.css";
// import PopupCard from "../card/PopupCard";

// const AddToCartButton = ({product}) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleButtonClick = () => {
//     setShowPopup(!showPopup); 
//     localStorage.setItem("product", JSON.stringify(product));
//     console.log(localStorage.getItem("product"));
//   };

//   return (
//     <div>
//       <button id="add-to-cart-btn" onClick={handleButtonClick}>
//         Add to cart
//       </button>

//       {showPopup && <PopupCard />}
//     </div>
//   );
// };

// export default AddToCartButton;


// AddToCartButton.js
import React, { useState } from "react"; 
import "../styles/Buttons.css";
import PopupCard from "../card/PopupCard";

const AddToCartButton = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    // setShowPopup(!showPopup);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <button id="add-to-cart-btn" onClick={handleButtonClick}>
        Add to cart
      </button>

      {showPopup && <PopupCard />}
    </div>
  );
};

export default AddToCartButton;
