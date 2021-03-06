import React, { useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../context/store';
import { recipesCategory, recipesListAPI, switchFilter } from '../context/action';
import { Scategory } from './assets/Tailwind';

import CategoryCard from './assets/CategoryCard';

import { getDataApi } from '../utils/tools';

export default function DisplayCategory() {
  const rota = useLocation();
  const dispatch = useContext(DispatchContext);
  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  const objSelector = inMeals ? 'measl' : 'drinks';
  const rotaAPI = inMeals ? 'foods' : 'drinks';
  const store = useContext(StoreContext);
  const categoriesList = store.recipescategory;

  useLayoutEffect(() => {
    const getDrinksCategorys = async () => {
      if (inDrinks && !store.recipeslist.drinks) {
        await getDataApi('drinks', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
      }
      if (inMeals && !store.recipeslist.meals) {
        await getDataApi('foods', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
      }
    };
    getDrinksCategorys();
  }, [dispatch, inDrinks, inMeals, objSelector, rota, store]);

  const getByCategory = async (strTarget, routerIs) => {
    if (routerIs === 'all' || store.hasfilter === strTarget) {
      await getDataApi(rotaAPI, 'all').then((res) => dispatch(recipesListAPI(res)));
      return dispatch(switchFilter(' '));
    }
    await getDataApi(routerIs, 'categorylist', strTarget)
      .then((res) => dispatch(recipesListAPI(res)));
    return dispatch(switchFilter(strTarget));
  };

  return (
    <section className={ Scategory } key={ Math.random().toString(+'16') }>
      <button
        type="button"
        data-testid="All-category-filter"
        key={ Math.random().toString(+'16') }
        onClick={ () => getByCategory('all', 'all') }
        text="Create"
      >
        All
      </button>
      {inMeals
        && categoriesList.meals
        && categoriesList.meals.slice(0, +'5').map((meall, index) => (
          <CategoryCard
            rota="foods"
            toCkick={ getByCategory }
            key={ Math.random().toString(+'16') }
            index={ index }
            srcName={ meall.strCategory }
          />))}

      {inDrinks
        && categoriesList.drinks
        && categoriesList.drinks.slice(0, +'5').map((drink, index) => (
          <CategoryCard
            rota="drinks"
            toCkick={ getByCategory }
            key={ Math.random().toString(+'16') }
            index={ index }
            srcName={ drink.strCategory }
          />))}

    </section>
  );
}

DisplayCategory.propTypes = {
  meals: PropTypes.objectOf(Object),
  drinks: PropTypes.objectOf(Object),
}.isRequired;
