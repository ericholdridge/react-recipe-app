import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const RecipeState = createContext();

export const RecipeProvider = ({ children }) => {
  const [foodResults, setFoodResults] = useState([]);
  const [searchInputVal, setSearchInputVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const FOOD_API = "1d675a235d464398a59eb53b85576149";

  // Fetch the data and store it in foodResults variable
  const handleSearchResults = async (e) => {
    e.preventDefault();
    await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchInputVal}&apiKey=${FOOD_API}&number=100`
    )
      .then((respone) => respone.json())
      .then((data) => setFoodResults(data.results));
    // Clear the input value after the user searches
    setSearchInputVal("");
  };

  const totalPosts = foodResults.length;
  const indexOfLastPost = currentPage * postsPerPage; //10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //0
  const currentPosts = foodResults.slice(indexOfFirstPost, indexOfLastPost); // Display postPerPage amount

  // Change the page
  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <RecipeState.Provider
      value={{
        setSearchInputVal,
        handleSearchResults,
        paginate,
        searchInputVal,
        foodResults,
        postsPerPage,
        totalPosts,
        currentPosts
      }}
    >
      {children}
    </RecipeState.Provider>
  );
};
