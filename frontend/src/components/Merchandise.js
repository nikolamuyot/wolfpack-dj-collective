// src/components/Merchandise.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MerchandiseItem from "./MerchandiseItem";
import "./Merchandise.css";

const Merchandise = () => {
  const [merchandiseList, setMerchandiseList] = useState([]);

  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        const response = await axios.get("/api/products"); // Assuming your backend route
        setMerchandiseList(response.data);
      } catch (error) {
        console.error("Error fetching merchandise:", error);
      }
    };

    fetchMerchandise();
  }, []);

  return (
    <div className="merchandise-container">
      <h1>Merchandise</h1>
      <div className="products">
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
