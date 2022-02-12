import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { StoreContext } from '../context/store';

import { recipeFavoriteFactory, recipeIngredientsFactory } from '../utils/Factory';
import {
  isFavorite,
  readLocalData,
  addFavorite,
  removeFavorite } from '../utils/storageTools';

import Recommendation from './Recommendation';
import ButtonSD from './assets/ButtonSD';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

export default function DrinkDetails() {
  const history = useHistory();
  const [favorite, setFavorite] = React.useState(false);
  const recipefocus = Object.values(useContext(StoreContext).recipefocus)[0];
  const { strDrinkThumb, strDrink, strCategory, strInstructions,
    strAlcoholic, idDrink } = recipefocus[0];

  useEffect(() => {
    const localDataFavorites = readLocalData('favoriteRecipes');
    console.log(isFavorite(idDrink));
    const isFavoriteRecipe = (idItem) => {
      if (localDataFavorites !== null) {
        return setFavorite(() => (isFavorite(idItem)));
      }
    };
    isFavoriteRecipe(idDrink);
  }, [idDrink]);

  const thisSetFavorite = () => {
    if (!favorite) {
      const newFavorite = recipeFavoriteFactory(recipefocus[0], 'drink');
      addFavorite(newFavorite);
      return setFavorite(true);
    }
    setFavorite(false);
    return removeFavorite(idDrink);
  };

  const startRecipe = () => history.push(`/drinks/${idDrink}/in-progress`);

  return (
    <>
      <section>
        <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" />
      </section>

      <ShareButton />

      <FavoriteButton isFavorite={ favorite } setFavorite={ thisSetFavorite } />

      <section>
        <h2 data-testid="recipe-title">{strDrink}</h2>
        <h6 data-testid="recipe-category">{strCategory}</h6>
        <h6 data-testid="recipe-category">{strAlcoholic}</h6>
      </section>

      <section>
        <hr />
        <h3>Ingredients</h3>
        {recipefocus && recipeIngredientsFactory(recipefocus[0])
          .map((ingr, index) => (
            <li
              key={ Math.random() }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`- ${ingr.ingredient} : ${ingr.measure}`}
            </li>
          ))}
        <hr />
      </section>

      <section>
        <h3>Instructions</h3>
        <p data-testid="instructions">{strInstructions}</p>
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
