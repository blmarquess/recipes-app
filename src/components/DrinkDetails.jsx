import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../context/store';
import Recommendation from './Recommendation';
import recipeFactory from '../utils/recipeFactory';
import ButtonSD from './assets/ButtonSD';
import ShareButton from './ShareButton';
imp

import { barShareButton } from './assets/Tailwind';

export default function DrinkDetails() {
  const history = useHistory();
  const recipefocus = Object.values(useContext(StoreContext).recipefocus)[0];
  const { strDrinkThumb, strDrink, strCategory, strInstructions,
    strAlcoholic, idDrink } = recipefocus[0];

  const startRecipe = () => history.push(`/drnks/${idDrink}/in-progress`);

  return (
    <>
      <section>
        <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
      </section>

      <ShareButton />
      <FavoriteButton />

      <section>
        <h2 data-testid="recipe-title">{ strDrink }</h2>
        <h6 data-testid="recipe-category">{ strCategory }</h6>
        <h6 data-testid="recipe-category">{ strAlcoholic }</h6>
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
