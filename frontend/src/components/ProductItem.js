// src/components/ProductItem.js
import React from "react";
import "./ProductItem.css";

const ProductItem = ({ name, price, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
