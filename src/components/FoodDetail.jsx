import PropTypes from 'prop-types';
import React from 'react';

export default function FoodDetail(props) {
  const {
    strMealThumb,
    strMeal,
    strCategory,
    strIngredient,
    strInstructions,
    strYoutube,
  } = props;

  return (
    <>
      <section>
        <img src={ strMealThumb } alt={ strMeal } />
        <h2>{ strMeal }</h2>
        <h6>{ strCategory }</h6>
      </section>
      <section>
        <section>
          <h3>Ingredients</h3>
          <p>{ strIngredient }</p>
        </section>
        <h3>Instructions</h3>
        <p>{ strInstructions }</p>
      </section>
      <section>
        <h3>Video</h3>
        <iframe
          src={ strYoutube.replace('watch?v=', 'embed/') }
          frameBorder="0"
          allowFullScreen
          title="video"
          data-testid="video"
        />
      </section>
      <button
        type="button"
      >
        Start Recipe
      </button>
    </>
  );
}

FoodDetail.propTypes = {
  strCategory: PropTypes.string,
  strIngredient: PropTypes.string,
  strInstructions: PropTypes.string,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strYoutube: PropTypes.string,
}.isRequired;
