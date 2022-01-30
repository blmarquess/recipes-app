import PropTypes from 'prop-types';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import ButtonOnSearch from './assets/ButtonOnSearch';

const BLACK_PATH = ['explore', 'profile'];

export default function Header({ title }) {
  const history = useHistory();
  return (
    <div clasname="header-app">
      <Link to="/profile">
        <img
          src={ profileIcon }
          data-testid="profile-top-btn"
          alt="perfil-Icon"
        />
      </Link>
      { title
        && (
          <h2 data-testid="page-title">
            { title }
          </h2>
        )}
      {
        BLACK_PATH.includes(history.location.pathname)
          ? <div> </div>
          : <ButtonOnSearch />
      }
    </div>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
