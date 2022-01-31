import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (

    <footer
      className="footer"
      data-testid="footer"
    >
      <Link to="/drinks">
        <button
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          type="button"
        >
          <img src={ drinkIcon } alt="Drinks" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
          type="button"
        >
          <img src={ exploreIcon } alt="Explore" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          src={ mealIcon }
          data-testid="food-bottom-btn"
          type="button"
        >
          <img src={ mealIcon } alt="Meal" />
        </button>
      </Link>
    </footer>
  );
}
