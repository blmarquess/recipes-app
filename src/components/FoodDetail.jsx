import PropTypes from 'prop-types';
import React from 'react';
import { refactoryYtUrl } from '../utils/tools';

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
          width="360"
          height="240"
          id="ytplayer"
          type="text/html"
          src={ refactoryYtUrl(strYoutube) }
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope"
          allowFullScreen
          title="YouTube video player"
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
