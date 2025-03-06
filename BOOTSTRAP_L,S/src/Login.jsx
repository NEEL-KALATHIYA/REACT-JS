import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css"

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
            <h2 className="text-center text-primary">Log in</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>

              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
