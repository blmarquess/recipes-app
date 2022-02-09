import React, { useContext, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../context/store';
import { feathRecommentations } from '../context/action';
import { getDataApi } from '../utils/tools';
import { SizePage } from './assets/Tailwind';
import CardCarossel from './assets/CardCarrosel';

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
    <SizePage>
      {store.length === 0
        ? <p>Loading</p>
        : (
          <section
            className="flex flex-row h-32 w-full overflow-x-scroll justify-start mt-10"
          >
            {inDrinks
            && store
            && recipesDrinks
            && recipesDrinks[0].slice(0, +'6').map((recipe, index) => (
              <div key={ Math.random() }>
                <CardCarossel
                  num={ index }
                  imgSrc={ recipe.strMealThumb }
                  title={ recipe.strMeal }
                  category={ recipe.strCategory }
                  strInstructions={ recipe.strInstructions }
                />
              </div>
            ))}
          </section>
        ) }
      {store.length === 0
        ? <p>Loading</p>
        : (
          <section
            className="flex flex-row h-32 w-full overflow-x-scroll justify-start mb-14"
          >
            {inMeals
            && store
            && recipesMeals
            && recipesMeals[0]
              .slice(0, +'6').map((recipe, index) => (
                <div key={ Math.random() }>
                  <CardCarossel
                    num={ index }
                    imgSrc={ recipe.strDrinkThumb }
                    title={ recipe.strDrink }
                    category={ recipe.strCategory }
                    strInstructions={ recipe.strInstructions }
                  />
                </div>
              ))}
          </section>
        )}

    </SizePage>
  );
}

export default Recommendation;
