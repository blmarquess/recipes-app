import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { refactoryYtUrl } from '../utils/tools';
import recipeFactory from '../utils/recipeFactory';
import { StoreContext } from '../context/store';
import Recommendation from './Recommendation';
import ButtonSD from './assets/ButtonSD';

export default function FoodDetail() {
  const history = useHistory();
  const recipefocus = Object.values(useContext(StoreContext).recipefocus)[0];
  const { strMealThumb, strMeal, strCategory, strInstructions,
    strYoutube, idMeal } = recipefocus[0];

  const startRecipe = () => history.push(`/foods/${idMeal}/in-progress`);

  return (
    <>
      <section>
        <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />
        <button type="button" data-testid="share-btn"> Share/ </button>
        <button type="button" data-testid="favorite-btn"> /Fav </button>
        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <h6 data-testid="recipe-category">{ strCategory }</h6>
      </section>

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

      <section>
        <h3>Instructions</h3>
        <p data-testid="instructions">{ strInstructions }</p>
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

      <Recommendation />

      <ButtonSD
        onClick={ () => startRecipe() }
        data-testid="start-recipe-btn"
        type="button"
        position="fixed"
        bottom="0px"
      >
        Start Recipe
      </ButtonSD>

    </>
  );
}
