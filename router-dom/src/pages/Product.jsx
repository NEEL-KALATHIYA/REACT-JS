import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Product.css";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProduct = async () => {
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <div className="product-container">
            <div className="product-card">
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />
                )}
                <h1 className="product-title">{product.title}</h1>
                <h3 className="product-price">${product.price}</h3>
                <p className="product-description">{product.description}</p>
                <Link className="BackHome" to="/">Back To Home</Link>
            </div>
        </div>
    );
};

export default Product;
