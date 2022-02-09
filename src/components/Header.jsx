import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

const headerStyle = `min-w-full h-12 px-8 py-10 grid-col-1 flex-col m-b-8 bg-gray-200
  border-b border-gray-300 shadow-md fixed top-0 left-0 z-20 items-center`;

export default function Header({ title }) {
  const [btnsearch, setBtnSH] = useState(false);
  const history = useHistory();
  return (
    <div className={ headerStyle }>
      <section className="flex flex-row justify-between">
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
        <div className="align-center items-center">
          { title
          && (
            <h2
              data-testid=" "
              className="text-center text-red-600 text-2xl font-extrabold"
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
