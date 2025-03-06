import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css"

const Signup = () => {
  return (
    <div className="page">
      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
          <h2 className="text-center text-primary">Sign Up</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
              />
            </div>

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
              Sign Up
            </button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
