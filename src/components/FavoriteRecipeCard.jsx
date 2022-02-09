import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AlertLC from './assets/AlertLC';

const copy = require('clipboard-copy');

export default function FavoriteRecipeCard(props) {
  // const { index, strMealThumb, strCategory, strMeal, strDrinkThumb, strTags } = props;
  const {
    index,
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
    teste } = props;
  const ONE_SECOND = 1000;
  const [alertLC, setAlertLC] = useState(false);
  // const history = useHistory();

  // function splitStrTags() {
  //   if (strTags !== null) {
  //     const arrayStrTags = strTags.split(',');
  //     return (
  //       arrayStrTags
  //         .map((tag) => (
  //           <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
  //             { tag }
  //           </span>))
  //     );
  //   }
  // }

  function unFavorite(favoriteId) {
    const oldFavoriteList = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavoriteList = oldFavoriteList
      .filter((favorite) => favorite.id !== favoriteId);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...newFavoriteList]));
    teste(newFavoriteList);
    // history.push('/favorite-recipes');
  }

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
      <button
        type="button"
        onClick={ () => unFavorite(id) }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt=""
        />
      </button>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.string,
  strCategory: PropTypes.string,
  strIngredient: PropTypes.string,
  strInstructions: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
}.isRequired;
