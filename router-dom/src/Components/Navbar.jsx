import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">MyShop</div>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="nav-link" to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
                    <Link className="nav-link" to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link className="nav-link" to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
