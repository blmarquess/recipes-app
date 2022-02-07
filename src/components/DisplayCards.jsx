import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { StoreContext, DispatchContext } from '../context/store';
import { recipeInFoco, recipesListAPI, recipesCategory } from '../context/action';

import Card from './assets/Card';

import { getDataApi } from '../utils/tools';

export default function DisplayCards() {
  const rota = useLocation();
  const history = useHistory();
  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  const store = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const getDrinks = async () => {
      if (inDrinks && store.recipeslist.meals) {
        await getDataApi('drinks', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
        await getDataApi('drinks', 'all').then((res) => {
          dispatch(recipesListAPI(res));
        });
        // return true;
      }
      if (inMeals && store.recipeslist.drinks) {
        await getDataApi('foods', 'categorias')
          .then((res) => dispatch(recipesCategory(res)));
        await getDataApi('foods', 'all').then((res) => {
          dispatch(recipesListAPI(res));
        });
        // return true;
      }
    };
    getDrinks();
  }, [inDrinks, inMeals, dispatch, store.recipeslist.meals, store.recipeslist.drinks]);

  const pushTo = (keyID) => {
    if (inDrinks) {
      const recipDri = store.recipeslist.drinks.find(({ idDrink }) => idDrink === keyID);
      dispatch(recipeInFoco(recipDri));
      return history.push(`/drinks/${keyID}`);
    }
    if (inMeals) {
      const recipMeal = store.recipeslist.meals.find(({ idMeal }) => idMeal === keyID);
      dispatch(recipeInFoco(recipMeal));
      return history.push(`/foods/${keyID}`);
    }
  };

  return (
    <>
      <button type="button" onClick={ () => console.log(store) }>
        test log
      </button>
      {/* utilisação de evento de click em elementos não button https://dev.to/receter/easy-accessible-click-handlers-4jkb */}
      <section
        className="displayCard"
        role="button"
        tabIndex={ 0 }
        onKeyDown={ () => true }
        onClick={ ({ target }) => pushTo(target.attributes['data-id'].value) }
      >
        {inMeals
          && store.recipeslist.meals
          && store.recipeslist.meals.slice(0, +'12').map((item, index) => (
            <Card
              key={ item.idMeal }
              keyItem={ item.idMeal }
              index={ index }
              srcName={ item.strMeal }
              imgSRC={ item.strMealThumb }
            />))}
      </section>

      <section
        className="displayCard"
        role="button"
        tabIndex={ 0 }
        onKeyDown={ () => true }
        onClick={ ({ target }) => pushTo(target.attributes['data-id'].value) }
      >
        {inDrinks
          && store.recipeslist.drinks
          && store.recipeslist.drinks.slice(0, +'12').map((item, index) => (
            <Card
              key={ item.idDrink }
              keyItem={ item.idDrink }
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
