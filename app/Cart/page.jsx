"use client";
import React from "react";
import "./Cart.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cart from "./Cart";

const CartPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
