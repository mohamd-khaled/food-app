import React from "react";
import "./Footer.css";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo.src} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            explicabo hic possimus eaque dolore, repellendus sed nisi mollitia
            repellat laborum nam minus fugiat perferendis necessitatibus
            voluptatum velit? Harum, voluptatibus ipsum.
          </p>
          <div className="footer-socials">
            <img src={assets.facebook_icon.src} alt="Facebook" />
            <img src={assets.twitter_icon.src} alt="twitter" />
            <img src={assets.linkedin_icon.src} alt="linkedin" />
          </div>
        </div>

        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Get IN Tpuch</h2>
          <ul>
            <li>+123123123</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
