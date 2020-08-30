/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnText }) => {
  return <button css={styles}>{btnText}</button>;
};

const styles = css`
  color: #fff;
  background: #000;
  padding: 9px 12px;
  border: none;
  border-radius: 4px;
  margin: 10px 0 20px 10px;
  cursor: pointer;
`;

export default Button;
