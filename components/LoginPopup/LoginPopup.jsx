import React from "react";
import "./LoginPopup.css";
import { assets } from "@/assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentForm, setCurrentForm] = React.useState("Log In");

  return (
    <div className="login-popup">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentForm}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon.src}
            alt="cross_icon"
          />
        </div>
        <div className="login-input">
          {currentForm === "Sign Up" ? (
            <>
              <input type="text" placeholder="Your Name" required />
            </>
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>
          {currentForm === "Log In" ? "Log In" : "Create Account"}
        </button>

        <div className="sign-up-conditions">
          <input type="checkbox" />
          <p>
            By Continuing, I agree to the Terms of Service and Privacy Policy
          </p>
        </div>

        {currentForm === "Log In" ? (
          <p className="change-form">
            {" "}
            Create New Account ?{" "}
            <button
              onClick={() => {
                setCurrentForm("Sign Up");
              }}
            >
              Create an account
            </button>
          </p>
        ) : (
          <p className="change-form">
            Already Have Account?{" "}
            <button
              onClick={() => {
                setCurrentForm("Log In");
              }}
            >
              Log In
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
