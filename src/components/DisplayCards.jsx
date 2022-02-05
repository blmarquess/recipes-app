import React from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
// import Card from './assets/Card';

export default function DisplayCards() {
  // const rota = useLocation();
  // const inMeals = rota.pathname.includes('foods');
  // const inDrinks = rota.pathname.includes('drinks');

  // const { meals, drinks } = props;

  return (
    <>
      <section className="displayCard">
        {/* {inMeals && meals.slice(0, +'12').map((item, index) => (
          <Card
            key={ item.idMeal }
            index={ index }
            srcName={ item.strMeal }
            imgSRC={ item.strMealThumb }
          />))} */}
      </section>

      <section className="displayCard">
        {/* {inDrinks && drinks.slice(0, +'12').map((item, index) => (
          <Card
            key={ item.idDrink }
            index={ index }
            srcName={ item.strDrink }
            imgSRC={ item.strDrinkThumb }
          />))} */}
      </section>
    </>
  );
}

DisplayCards.propTypes = {
  meals: PropTypes.objectOf(Object),
  drinks: PropTypes.objectOf(Object),
}.isRequired;
