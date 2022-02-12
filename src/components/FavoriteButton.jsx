import React from 'react';
import PropTypes from 'prop-types';

import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import { barShareButton } from './assets/Tailwind';

export default function FavoriteButton(props) {
  const { isFavorite, setFavorite } = props;
  return (
    <div className={ barShareButton }>
      {!isFavorite
        ? (
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ setFavorite }
            src={ whiteHeartIcon }
          >
            <img src={ whiteHeartIcon } alt="Black Heart Icon" />
          </button>)
        : (
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ setFavorite }
            src={ blackHeartIcon }
          >
            <img src={ blackHeartIcon } alt="White Heart Icon" />
          </button>)}

    </div>
  );
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  setFavorite: PropTypes.func,
}.isRequired;
