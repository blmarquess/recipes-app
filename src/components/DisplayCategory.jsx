import React, { useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../context/store';
import { recipesCategory } from '../context/action';

import CategoryCard from './assets/CategoryCard';

import { getDataApi } from '../utils/tools';

export default function DisplayCategory() {
  const rota = useLocation();
  const dispatch = useContext(DispatchContext);
  // const inMeals = false;
  // const inDrinks = false;
  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  const store = useContext(StoreContext);
  const categoriesList = store.recipescategory;
  console.log(categoriesList);

  useLayoutEffect(() => {
    const getDrinksCategorys = async () => {
      if (inDrinks && store.recipeslist.meals) {
        await getDataApi('drinks', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
      }
      if (inMeals && store.recipeslist.drinks) {
        await getDataApi('foods', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
      }
    };
    getDrinksCategorys();
  }, [dispatch, inDrinks, inMeals, rota, store]);

  return (
    <section className="displayCard">
      {inMeals
        && categoriesList.meals
        && categoriesList.meals.slice(0, +'5').map((meall, index) => (
          <CategoryCard
            key={ Math.random() }
            index={ index }
            srcName={ meall.strCategory }
          />))}

      {inDrinks
        && categoriesList.drinks
        && categoriesList.drinks.slice(0, +'5').map((drink, index) => (
          <CategoryCard
            key={ Math.random() }
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
