import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StoreContext, DispatchContext } from '../context/store';
import { recipesListAPI } from '../context/action';

import Card from './assets/Card';

import { getDataApi } from '../utils/tools';

export default function DisplayCards() {
  const rota = useLocation();
  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  const store = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const getDrinks = async () => {
      if (inDrinks && store.recipeslist.meals) {
        await getDataApi('drinks', 'all').then((res) => {
          dispatch(recipesListAPI(res));
        });
        return true;
      }
    };
    getDrinks();
  }, [inDrinks, dispatch, rota, store.recipeslist.meals]);

  return (
    <>
      <button type="button" onClick={ () => console.log(store) }>
        test log
      </button>
      <section
        className="displayCard"
        role="button"
        tabIndex={ 0 }
        onKeyDown={ () => console.log(dispatch) }
        onClick={ () => console.log('clicou') }
      >
        {inMeals
          && store.recipeslist.meals
          && store.recipeslist.meals.slice(0, +'12').map((item, index) => (
            <Card
              key={ item.idMeal }
              index={ index }
              srcName={ item.strMeal }
              imgSRC={ item.strMealThumb }
            />))}
      </section>

      <section className="displayCard">
        {inDrinks
          && store.recipeslist.drinks
          && store.recipeslist.drinks.slice(0, +'12').map((item, index) => (
            <Card
              key={ item.idDrink }
              index={ index }
              srcName={ item.strDrink }
              imgSRC={ item.strDrinkThumb }
            />))}
      </section>
    </>
  );
}

DisplayCards.propTypes = {
  meals: PropTypes.objectOf(Object),
  drinks: PropTypes.objectOf(Object),
}.isRequired;
