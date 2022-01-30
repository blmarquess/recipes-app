import React from 'react';
import { Link } from 'react-router-dom';
import HeaderProfile from '../components/HeaderNoSer';
import Footer from '../components/Footer';

export default function Explore() {
  return (
    <div>
      <HeaderProfile title="Explore" />
      <Link to="./explore/foods">
        <button
          data-testid="explore-foods"
          type="button"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="./explore/drinks">
        <button
          data-testid="explore-drinks"
          type="button"
        >
          Explore Drinks
        </button>
      </Link>
      <Footer />
    </div>
  );
}
