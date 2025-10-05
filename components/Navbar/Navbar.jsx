"use client";
import React, { use } from "react";
import "./Navbar.css";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Cart from "../../app/Cart/page";
import Link from "next/link";

const Navbar = ({ setShowLogin, setShowSearch }) => {
  const [links, setLinks] = React.useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo.src} alt="logo" className="logo" />
      <ul className="nav-links">
        <Link
          href="/"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLinks("home");
          }}
          className={links === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLinks("menu");
          }}
          className={links === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#appdownload"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLinks("mobileapp");
          }}
          className={links === "mobileapp" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setLinks("contactus");
          }}
          className={links === "contactus" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="nav-icons">
        <img
          src={assets.search_icon.src}
          alt="Search-Icon"
          onClick={() => setShowSearch(true)}
        />
        <Link href="/Cart">
          <img src={assets.basket_icon.src} alt="Basket-Icon" />
        </Link>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
          className="login-btn"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
