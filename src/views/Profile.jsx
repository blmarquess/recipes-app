import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNoSer from '../components/HeaderNoSer';
import Footer from '../components/Footer';
import { readLocalData, dataCleaner } from '../utils/tools';

export default function Profile() {
  const mail = readLocalData('user');
  return (
    <div>
      <HeaderNoSer title="Profile" />
      <h2
        data-testid="profile-email"
      >
        {mail && mail.email}
      </h2>
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={ dataCleaner }
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}
