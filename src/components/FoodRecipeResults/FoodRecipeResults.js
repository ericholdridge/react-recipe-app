/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipeState } from "../Context/Context";

const FoodRecipeResults = () => {
  const { foodResults } = useContext(RecipeState);
  return (
    <div>
      {foodResults.map((item, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{item.body}</li>
            </ul>
          </div>
        );
      })}
      <h1>Hello</h1>
    </div>
  );
};

export default FoodRecipeResults;
