import React from "react";
import { useState } from "react";
import "./FoodItem.css";
import { assets } from "@/assets/assets";

function FoodItem({ id, name, price, image, desc }) {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-image">
        <img className="food-img" src={image.src} alt={name} />
        {!itemCount ? (
          <img
            src={assets.add_icon_white.src}
            alt="add_icon_white"
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-count">
            <img
              src={assets.remove_icon_red.src}
              alt="remove"
              onClick={() => setItemCount((prev) => prev - 1)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green.src}
              alt="add"
              onClick={() => setItemCount((prev) => prev + 1)}
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
