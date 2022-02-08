import React, { useContext, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../context/store';
import { feathRecommentations } from '../context/action';
import { getDataApi } from '../utils/tools';

function Recommendation() {
  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const inMeals = rota.includes('foods');
  const inDrinks = rota.includes('drinks');
  const dispatch = useContext(DispatchContext);
  const store = useContext(StoreContext).recipesrecomend;

  const recipesDrinks = Object.values(store);
  const recipesMeals = Object.values(store);

  useLayoutEffect(() => {
    const recomends = async () => {
      if (inDrinks) {
        await getDataApi('foods', 'all').then((res) => {
          dispatch(feathRecommentations(res));
        }).catch(() => []);
      }
      if (inMeals) {
        await getDataApi('drinks', 'all').then((res) => {
          dispatch(feathRecommentations(res));
        }).catch(() => []);
      }
    };
    recomends();
  }, [dispatch, inDrinks, inMeals]);

  return (
    <div>
      {store.length === 0
        ? <p>Loading</p>
        : (
          <section>
            {inDrinks
            && store
            && recipesDrinks
            && recipesDrinks[0].slice(0, +'6').map((recipe, index) => (
              <div
                data-testid={ `${index}-recomendation-card` }
                key={ Math.random() }
              >
                <img src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                <h2
                  data-testid={ `${index}-recomendation-title` }
                >
                  { recipe.strMeal }
                </h2>
                <h6
                  data-testid={ `${index}-recomendation-category` }
                >
                  { recipe.strCategory }
                </h6>
              </div>
            ))}
          </section>
        )}
      {store.length === 0
        ? <p>Loading</p>
        : (
          <section>
            {inMeals
            && store
            && recipesMeals
            && recipesMeals[0]
              .slice(0, +'6').map((recipe, index) => (
                <div
                  data-testid={ `${index}-recomendation-card` }
                  key={ Math.random() }
                >
                  <img src={ recipe.strDrinkThumb } alt={ recipe.strDrink } />
                  <h2
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { recipe.strDrink }
                  </h2>
                  <h6
                    data-testid={ `${index}-recomendation-category` }
                  >
                    { recipe.strCategory }
                  </h6>
                  <h6
                    data-testid={ `${index}-recomendation-category` }
                  >
                    { recipe.strAlcoholic }
                  </h6>
                </div>
              ))}
          </section>
        )}
    </div>
  );
}

export default Recommendation;
