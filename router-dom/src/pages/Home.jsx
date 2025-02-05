import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; // Make sure this file exists

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-container">
      {products.map(({ id, title, price, image }) => (
        <div key={id} className="product-card">
          <Link to={`/product/${id}`} className="product-link">
            <img src={image} alt={title} className="product-image" />
            <h1 className="product-title">{title}</h1>
            <h3 className="product-price">${price}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
