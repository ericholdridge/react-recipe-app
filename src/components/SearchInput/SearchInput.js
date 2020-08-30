/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipeState } from "../Context/Context";

const SearchInput = () => {
  const { searchInputVal, setSearchInputVal, handleSearchResults } = useContext(
    RecipeState
  );
  return (
    <form css={styles}>
      <input
        onChange={(e) => setSearchInputVal(e.target.value)}
        value={searchInputVal}
        type="text"
        placeholder="Search recipes..."
      />
      <button onClick={handleSearchResults}>Submit</button>
    </form>
  );
};

const styles = css`
  width: 100%;
  max-width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border-radius: 4px 0 0 4px;
    padding: 0 0 0 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    color: #000;
    background: #fff;
    height: 100%;
    border: none;
    padding: 0 14px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export default SearchInput;
