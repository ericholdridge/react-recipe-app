/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SearchInput from "../SearchInput/SearchInput";
import Container from "../../components/Container";

const Navbar = () => {
  return (
    <nav css={styles}>
      <Container>
        <div className="logo">RecipeApp</div>
        <SearchInput />
        <div className="nav-items">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  background: #000;
  padding: 14px 0;
  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      color: #fff;
      font-weight: 700;
    }
    .nav-items {
      width: 100%;
      max-width: 250px;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

export default Navbar;
