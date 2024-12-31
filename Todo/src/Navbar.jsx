import { path } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navItmes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/signup",
      name: "Sign Up",
    },
    {
      path: "/login",
      name: "Login Up",
    },
  ];
  return (
    <div>
      {navItmes.map(({ path, name }) => (
        <p key={path}>
          <Link to={path}>{name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Navbar;
