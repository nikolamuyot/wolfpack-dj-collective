// src/components/MerchandiseItem.js
import React from "react";
import "./MerchandiseItem.css";

const MerchandiseItem = ({ name, price, imageUrl }) => {
  return (
    <div className="merchandise-item">
      <img src={imageUrl} alt={name} className="merchandise-item-image" />
      <h3 className="merchandise-item-name">{name}</h3>
      <p className="merchandise-item-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default MerchandiseItem;
