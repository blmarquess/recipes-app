import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { refactoryYtUrl } from '../utils/tools';
import { recipeFavoriteFactory, recipeIngredientsFactory } from '../utils/Factory';
import {
  isFavorite,
  readLocalData,
  addFavorite,
  removeFavorite } from '../utils/storageTools';

import { StoreContext } from '../context/store';

import Recommendation from './Recommendation';
import ButtonSD from './assets/ButtonSD';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

export default function FoodDetail() {
  const history = useHistory();
  const [favorite, setFavorite] = React.useState(false);
  const recipefocus = Object.values(useContext(StoreContext).recipefocus)[0];
  const { strMealThumb, strMeal, strCategory, strInstructions,
    strYoutube, idMeal } = recipefocus[0];

  React.useEffect(() => {
    const localDataFavorites = readLocalData('favoriteRecipes');
    console.log(isFavorite(idMeal));
    const isFavoriteRecipe = (idItem) => {
      if (localDataFavorites !== null) {
        return setFavorite(() => (isFavorite(idItem)));
      }
    };
    isFavoriteRecipe(idMeal);
  }, [idMeal]);

  const thisSetFavorite = () => {
    if (!favorite) {
      const newFavorite = recipeFavoriteFactory(recipefocus[0], 'food');
      addFavorite(newFavorite);
      return setFavorite(true);
    }
    setFavorite(false);
    return removeFavorite(idMeal);
  };

  const startRecipe = () => history.push(`/foods/${idMeal}/in-progress`);

  return (
    <>
      <section>
        <img src={ strMealThumb } alt={ strMeal } data-testid="recipe-photo" />

        <ShareButton />
        <FavoriteButton isFavorite={ favorite } setFavorite={ thisSetFavorite } />

        <h2 data-testid="recipe-title">{ strMeal }</h2>
        <h6 data-testid="recipe-category">{ strCategory }</h6>
      </section>

      <section>
        <hr />
        <h3>Ingredients</h3>
        { recipefocus && recipeIngredientsFactory(recipefocus[0])
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
