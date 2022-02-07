import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNoSer from '../components/HeaderNoSer';
import Footer from '../components/Footer';

export default function ExploreFoods() {
  return (
    <div>
      <HeaderNoSer title="Explore Foods" />
      <Link to="/explore/foods/ingredients">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          data-testid="explore-by-nationality"
          type="button"
        >
          By Nationality
        </button>
      </Link>
      <Link to="/surprise/foods">
        <button
          data-testid="explore-surprise"
          type="button"
        >
          Surprise me!
        </button>
      </Link>
      <Footer />
    </div>
  );
}
