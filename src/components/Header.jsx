import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import ButtonOnSearch from './assets/ButtonOnSearch';
// import AlertBS from './assets/AlertBS';

export default function Header({ title }) {
  // const alertStage = useSelector((state) => state.searchdata.showalert);

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
      <ButtonOnSearch />
      {/* {alertStage
        ? <AlertBS />
        : <ButtonOnSearch />} */}
    </div>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
