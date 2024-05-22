// src/components/Merchandise.js
import React from "react";
import MerchandiseItem from "./MerchandiseItem";

const merchandiseList = [
  { name: "DJ Hat", price: 19.99, imageUrl: "/images/hat.jpg" },
  { name: "DJ T-Shirt", price: 24.99, imageUrl: "/images/tshirt.jpg" },
  { name: "DJ Hoodie", price: 39.99, imageUrl: "/images/hoodie.jpg" },
  // Add more items as needed
];

const Merchandise = () => {
  return (
    <div>
      <h1>Merchandise</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {merchandiseList.map((item, index) => (
          <MerchandiseItem
            key={index}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
