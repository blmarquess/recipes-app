import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfile from '../components/HeaderNoSer';
import Footer from '../components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <HeaderProfile title="Explore Drinks" />
      <Link to="./explore/foods/ingredients">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingridient
        </button>
      </Link>
      <Link to="/drinks/random">
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
