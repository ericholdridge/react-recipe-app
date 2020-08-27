/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RecipeState } from "../Context/Context";

const SearchInput = () => {
  const { searchInputVal, setSearchInputVal, handleSearchResults } = useContext(RecipeState);
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
  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 0 0 0 10px;
  }
  button {
    color: #fff;
    background: blue;
    height: 100%;
  }
`

export default SearchInput;
