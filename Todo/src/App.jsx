import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </>
  );
}

export default App;
