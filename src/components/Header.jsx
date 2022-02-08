import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title }) {
  const [btnsearch, setBtnSH] = useState(false);
  const history = useHistory();
  return (
    <div className="w-full h-50">
      <section className="header-icons">
        <div>
          <button
            type="button"
            onClick={ () => history.push('/profile') }
          >
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="perfil-Icon"
              className="rounded-full h-6 w-6"
            />
          </button>
        </div>
        <div>
          { title
          && (
            <h2
              className="text-center text-red-600"
              data-testid="page-title"
            >
              { title }
            </h2>
          )}
        </div>
        <div>
          <button
            src={ searchIcon }
            type="button"
            className="rounded-full h-6 w-6"
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
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
