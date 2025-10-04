import { StoreContext } from "@/context/StoreContext";
import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ categoray }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          if (categoray === "All" || categoray === food.category) {
            return (
              <FoodItem
                key={index}
                id={food.id}
                name={food.name}
                price={food.price}
                image={food.image}
                desc={food.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
