import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../context/store';
import Recommendation from './Recommendation';
import recipeFactory from '../utils/recipeFactory';

export default function DrinkDetails() {
  const recipefocus = Object.values(useContext(StoreContext).recipefocus)[0];
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strInstructions,
    strAlcoholic,
  } = recipefocus[0];

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <section>
        <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
        <button type="button" data-testid="share-btn"> Share/ </button>
        <button type="button" data-testid="favorite-btn"> /Fav </button>
        <h2 data-testid="recipe-title">{ strDrink }</h2>
        <h6 data-testid="recipe-category">{ strCategory }</h6>
        <h6 data-testid="recipe-category">{ strAlcoholic }</h6>
      </section>
      <section>
        <section>
          <hr />
          <h3>Ingredients</h3>
          { recipefocus && recipeFactory(recipefocus[0])
            .map((ingr, index) => (
              <li
                key={ Math.random() }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { `- ${ingr.ingredient} : ${ingr.measure}` }
              </li>
            )) }
          <hr />
        </section>
      </section>
      <section>
        <h3>Instructions</h3>
        <p data-testid="instructions">{ strInstructions }</p>
      </section>
      <Recommendation />
      <button
        onClick={ () => setClicked(!clicked) }
        data-testid="start-recipe-btn"
        type="button"
      >
        { clicked ? 'Continue Recipe' : 'Start Recipe' }
      </button>
    </>
  );
}

DrinkDetails.propTypes = {
  strCategory: PropTypes.string,
  strIngredient: PropTypes.string,
  strInstructions: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
}.isRequired;
