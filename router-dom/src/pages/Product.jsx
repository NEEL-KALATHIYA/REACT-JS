import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Product not found");
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
    if (error) return <h2 className="text-center text-danger mt-5">{error}</h2>;

    return (
        <div className="container mt-5">
            <div className="card mx-auto p-3" style={{ maxWidth: "500px" }}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "contain" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <h4 className="text-primary">${product.price}</h4>
                    <p className="card-text">{product.description}</p>
                    <Link to="/" className="btn btn-secondary">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
