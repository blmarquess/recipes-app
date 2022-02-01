import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CardDrinks from './assets/CardDrinks';
import CardMeals from './assets/CardMeals';

export default function DisplayCards() {
  const dataToDisplay = useSelector((state) => state.searchdata.data);
  const rota = useLocation();
  console.log('Fisrt:', dataToDisplay, 'Parms: ', rota);

  const inMeals = rota.pathname.includes('foods');
  const inDrinks = rota.pathname.includes('drinks');
  console.log(inMeals);
  console.log(inDrinks);
  return (
    <div>
      {inMeals && <CardMeals />}
      {inDrinks && <CardDrinks />}
    </div>
  );
}
