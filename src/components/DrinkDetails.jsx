import React from 'react';
import PropTypes from 'prop-types';

export default function DrinkDetails(props) {
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strIngredient,
    strInstructions,
  } = props;
  return (
    <>
      <section>
        <img src={ strDrinkThumb } alt={ strDrink } />
        <h2>{ strDrink }</h2>
        <h6>{ strCategory }</h6>
      </section>
      <section>
        <h3>Ingredients</h3>
        <p>{ strIngredient }</p>
      </section>
      <section>
        <h3>Instructions</h3>
        <p>{ strInstructions }</p>
      </section>
      <button
        type="button"
      >
        Start Recipe
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
