import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from './assets/Card';

export default function DisplayCards() {
  const dataToDysplay = useSelector((state) => state.searchdata.data).slice(0, +'12');
  const rota = useLocation();

  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  return (
    <section className="displayCard">
      {inMeals && dataToDysplay.map((item, index) => (
        <Card
          key={ item.idMeal }
          index={ index }
          srcName={ item.strMeal }
          imgSRC={ item.strMealThumb }
        />))}
      {inDrinks && dataToDysplay.map((item, index) => (
        <Card
          key={ item.idDrink }
          index={ index }
          srcName={ item.strDrink }
          imgSRC={ item.strDrinkThumb }
        />))}
    </section>
  );
}
