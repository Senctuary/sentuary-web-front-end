// import React, { useState, useEffect } from "react";
// import "../styles/Card.css";
// import AddToCartButton from "../buttons/AddToCartButton";

// const Card = ({ product }) => {
//   const [image, setImage] = useState(""); // Define the setImage function
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Assuming you want to display the product's avatar for each card
//     setImage(product.avatar);
//     setLoading(false);
//   }, [product]);
  
//   return (
//     <div className="card">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//           <img className="image" src={image} alt={product.name} /> 
//       )}
//           <div className="card-body">
//             <p className="card-title">{product.name}</p>
//             <p className="card-price">${product.price}</p>
//             <AddToCartButton onClick={product} />
//           </div>
//     </div>
//   );
// };

// export default Card;

// Card.js
import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import AddToCartButton from "../buttons/AddToCartButton";

const Card = ({ product }) => {
  const [image, setImage] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImage(product.avatar);
    setLoading(false);
  }, [product]);
  
  return (
    <div className="card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img className="image" src={image} alt={product.name} /> 
      )}
      <div className="card-body">
        <p className="card-title">{product.name}</p>
        <p className="card-price">${product.price}</p>
        <AddToCartButton product={product} /> {/* Ensure that you pass the product here */}
      </div>
    </div>
  );
};

export default Card;
