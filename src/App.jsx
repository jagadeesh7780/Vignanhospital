import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/Products";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
