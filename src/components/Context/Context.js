import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const RecipeState = createContext();

export const RecipeProvider = ({ children }) => {
  const [foodResults, setFoodResults] = useState([]);
  const [searchInputVal, setSearchInputVal] = useState("");

  // Fetch the data
   const handleSearchResults = async (e) => {
    e.preventDefault();
    const FOOD_API = "1d675a235d464398a59eb53b85576149";
    await fetch(
      `https://jsonplaceholder.typicode.com/${searchInputVal}`
    ).then(respone => respone.json()).then(data => setFoodResults(data));
  };


  return (
    <RecipeState.Provider
      value={{
        searchInputVal,
        setSearchInputVal,
        handleSearchResults,
        foodResults,
      }}
    >
      {children}
    </RecipeState.Provider>
  );
};
