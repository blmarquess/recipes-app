import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

export default function HeaderNoSer({ title }) {
  return (
    <div clasname="header-app">
      <Link to="/profile">
        <img
          data-testid="profile-top-btn"
          alt="perfil-Icon"
          src={ profileIcon }
        />
      </Link>
      { title
        && (
          <h1 data-testid="page-title">
            { title }
          </h1>
        )}
    </div>);
}

HeaderNoSer.propTypes = {
  title: PropTypes.string.isRequired,
};
