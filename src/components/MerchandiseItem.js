// src/components/MerchandiseItem.js
import React from "react";

const MerchandiseItem = ({ name, price, imageUrl }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default MerchandiseItem;
