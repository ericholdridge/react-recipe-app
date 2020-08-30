/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipeState } from "../Context/Context";

const Pagination = () => {
  const { postsPerPage, totalPosts, paginate, currentPosts } = useContext(
    RecipeState
  );
  const numbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    numbers.push(i);
  }
  return (
    <nav css={styles}>
      <ul>
        {numbers.map((num) => (
          <li key={num}>
            <a onClick={(e) => paginate(e, num)} href="!#">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style-type: none;
    li {
      padding: 0 10px;
    }
  }
`;

export default Pagination;
