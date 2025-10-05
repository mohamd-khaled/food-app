import React, { useContext } from "react";
import { useState } from "react";
import "./FoodItem.css";
import { assets } from "@/assets/assets";
import { StoreContext } from "@/context/StoreContext";

function FoodItem({ id, name, price, image, desc }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image">
        <img className="food-img" src={image.src} alt={name} />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white.src}
            alt="add_icon_white"
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-count">
            <img
              src={assets.remove_icon_red.src}
              alt="remove"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green.src}
              alt="add"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts.src} alt="" />
        </div>
        <p className="food-desc">{desc}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
