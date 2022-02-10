import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import AlertLC from './assets/AlertLC';

const copy = require('clipboard-copy');

export default function DoneRecipeCard(props) {
  const {
    index,
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags } = props;
  const ONE_SECOND = 1000;
  const [alertLC, setAlertLC] = useState(false);

  function copyToClipboard() {
    copy(`http://localhost:3000/${type}s/${id}`);
    setAlertLC(true);
    setTimeout(() => {
      setAlertLC(false);
    }, ONE_SECOND);
  }

  return (
    <div>
      <AlertLC alertLC={ alertLC } />
      <Link to={ `/${type}s/${id}` }>
        <img
          width="200px"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt=""
        />
        <h3 data-testid={ `${index}-horizontal-top-text` }>
          { `${nationality} - ${category}` }
        </h3>
        <h3 data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</h3>
        <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
      </Link>
      <h3 data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</h3>
      <button
        type="button"
        onClick={ copyToClipboard }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt=""
        />
      </button>
      { tags.map((tag) => (
        <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>{ tag }</span>
      ))}
    </div>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.string,
  strCategory: PropTypes.string,
  strIngredient: PropTypes.string,
  strInstructions: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
}.isRequired;
