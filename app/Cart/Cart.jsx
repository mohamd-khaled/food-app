"use client";
import React, { useContext, useState } from "react";
import "./Cart.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { StoreContext } from "@/context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotal } =
    useContext(StoreContext);

  const [promo, setPromo] = useState(0);

  const feePrice = 10;
  return (
    <div className="cart">
      <div className="items">
        <div className="data">
          <p>image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <div className="food">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="data item">
                    <img src={item.image.src} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <h4
                      className="cross"
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                    >
                      X
                    </h4>
                    <br />
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-details">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <hr />
          <div className="cart-details">
            <p>fee</p>
            <p>${feePrice}</p>
          </div>
          <hr />
          <div className="cart-details total">
            <p>Total</p>
            <p>${getTotal() + feePrice - getTotal() * (promo / 100)}</p>
          </div>
          <button className="total-button">Proceed To Chekout</button>
        </div>
        <div className="cart-promo">
          <p>If You Have Promo Code, Please Enter It</p>
          <input
            type="text"
            placeholder="Promo Code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
