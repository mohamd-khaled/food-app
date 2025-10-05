"use client";
// This is a component
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home/Home";
import Menu from "@/components/Menu/Menu";
import FoodDisplay from "@/components/FoodDisplay/FoodDisplay";
import Footer from "@/components/Footer/Footer";
import AppDownload from "@/components/AppDownload/AppDownload";
import LoginPopup from "@/components/LoginPopup/LoginPopup";
import SearchPopup from "@/components/SearchPopUp/SearchPopUp";
// React
import React from "react";
import { useState } from "react";
import StoreContextProvider from "@/context/StoreContext";

const page = () => {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {showSearch && <SearchPopup setShowSearch={setShowSearch} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} setShowSearch={setShowSearch} />
        <Home />
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay categoray={category} />
        <AppDownload />
      </div>
      <Footer />
    </>
  );
};

export default page;
