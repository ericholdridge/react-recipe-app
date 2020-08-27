/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// Components
import Navbar from "../Navbar/Navbar";
import FoodRecipeResults from '../FoodRecipeResults/FoodRecipeResults';

const Hero = () => {
  return (
    <section className="">
      <Navbar />
      <FoodRecipeResults />
    </section>
  );
};

export default Hero;
