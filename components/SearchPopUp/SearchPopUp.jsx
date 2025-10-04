import React, { useContext } from "react";
import "./SearchPopUp.css";
import { assets } from "@/assets/assets";
import { StoreContext } from "@/context/StoreContext";
import { useState } from "react";

const SearchPopUp = ({ setShowSearch }) => {
  const { food_list } = useContext(StoreContext);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search-popup">
      <form action="" className="search-form">
        <div className="search-title">
          <h2>Search</h2>
          <img
            onClick={() => setShowSearch(false)}
            src={assets.cross_icon.src}
            alt="cross_icon"
          />
        </div>
        <input
          type="text"
          placeholder="Enter the Dish Category OR Dish Name"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="search-result">
          {food_list.map((food, index) => {
            if (searchValue === "") {
              return (
                <div key={index} className="search-item">
                  <p>{food.name}</p>
                  <hr />
                </div>
              );
            } else if (
              food.category.toLowerCase().includes(searchValue.toLowerCase()) ||
              food.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return (
                <div key={index} className="search-item">
                  <p>{food.name}</p>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      </form>
    </div>
  );
};

export default SearchPopUp;
