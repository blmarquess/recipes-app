import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfile from '../components/HeaderNoSer';
import Footer from '../components/Footer';

export default function ExploreFoods() {
  return (
    <div>
      <HeaderProfile title="Explore Foods" />
      <Link to="./explore/foods/ingredients">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingridient
        </button>
      </Link>
      <Link to="./explore/foods/nationalities">
        <button
          data-testid="explore-by-nationality"
          type="button"
        >
          By Nationality
        </button>
      </Link>
      <Link to="/foods/random">
        <button
          data-testid="explore-surprise"
          type="button"
        >
          Surprise Me!
        </button>
      </Link>
      <Footer />
    </div>
  );
}
