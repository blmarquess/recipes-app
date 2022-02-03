import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfile from '../components/HeaderNoSer';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <HeaderProfile title="Explore Drinks" />
      <Link to="/explore/drinks/ingredients">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/surprise/drinks">
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
