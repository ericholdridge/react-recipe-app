/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipeState } from "../Context/Context";
import Container from "../Container";
import Button from "../Button";

const FoodRecipeResults = () => {
  const { currentPosts } = useContext(RecipeState);

  return (
    <div css={styles} className="foodRecipeResults">
      <Container>
        {currentPosts.map((item, index) => {
          return (
            <div key={index} className="foodItem">
              <img src={item.image} alt={item.title} />
              <div className="recipeName">
                <h3>Recipe Name:</h3>
                <p>{item.title}</p>
              </div>
              <Button btnText="View Recipe"/>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .foodItem {
      width: 100%;
      max-width: 380px;
      background: #fff;
      margin: 20px 0;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px,
        rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
      .recipeName {
        display: flex;
        align-items: center;
        padding: 20px 0 0 10px;
        h2 {
          margin: 0 auto;
        }
      }
      img {
        width: 100%;
        display: block;
      }
    }
  }
`;

export default FoodRecipeResults;
