import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import CategoryCard from './assets/CategoryCard';

export default function DisplayCategory(props) {
  const rota = useLocation();
  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');

  const { meals, drinks } = props;

  return (
    <section className="displayCard">
      {inMeals && meals.slice(0, +'5').map((meall, index) => (
        <CategoryCard
          key={ Math.random() }
          index={ index }
          srcName={ meall.strCategory }
        />))}

      {inDrinks
        && drinks.slice(0, +'5').map((drink, index) => (
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
