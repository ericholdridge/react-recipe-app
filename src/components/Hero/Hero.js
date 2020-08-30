/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// Components
import Navbar from "../Navbar/Navbar";
import FoodRecipeResults from '../FoodRecipeResults/FoodRecipeResults';
import Pagination from '../FoodRecipeResults/Pagination';

const Hero = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <FoodRecipeResults />
      <Pagination />
    </section>
  );
};

export default Hero;
