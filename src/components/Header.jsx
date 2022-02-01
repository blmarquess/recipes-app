import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const pathname = useLocation().pathname.replace('/', '');
  const pageTitle = pathname[0].toUpperCase() + pathname.slice(1)
    .toLowerCase();

  const [btnsearch, setBtnSH] = useState(false);
  return (
    <div className="header-top">
      <section className="header-icons">
        <div>
          <Link to="/profile">
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="perfil-Icon"
            />
          </Link>
        </div>
        <div>
          { title
          && (
            <h2 data-testid="page-title">
              { title || pageTitle }
            </h2>
          )}
        </div>
        <div>
          <button
            src={ searchIcon }
            type="button"
            data-testid="search-top-btn"
            onClick={ () => setBtnSH(!btnsearch) }
          >
            <img src={ searchIcon } alt="profileIcon" />
          </button>
        </div>
      </section>
      <section>
        { btnsearch && <SearchBar /> }
      </section>
    </div>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
