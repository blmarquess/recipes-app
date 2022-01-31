import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApi } from '../utils/tools';

export default function DrinksDetails() {
  const [drinksState, setDrinkState] = useState([{ idDrink: 'loading...' }]);
  const pathId = useLocation().pathname.split('/drinks/')[1];

  const randomDrink = async () => {
    const drinkId = await getDataApi('random');
    return drinkId;
  };

  useEffect(() => {
    const setDataState = async () => {
      if (pathId === 'random') {
        return randomDrink().then((res) => setDrinkState(res.drinks));
      }
      if (pathId !== undefined && pathId !== '') {
        return getDataApi('id', pathId).then((res) => setRandomId(res.drinks));
      }
    };
    setDataState();
  }, [pathId]);

  return (
    <div>
      {drinksState.map((drink) => (
        <div
          key={ Math.random() }
        >
          <img src={ drink.strDrinkThumb } alt={ drink.strDrink } />
          <h2>{ drink.strDrink }</h2>
          <h6>{ drink.strCategory }</h6>
        </div>
      ))}
      <h3>Ingredients</h3>
      {/* {drinksState
        .filter((drinkIgr, i) => (`${drinkIgr.strIngredient}${i}` !== null || ''
        ? (<span>{`${drinkIgr.strIngredient}${i}`}</span>) : null
      ))} */}
      <h3>Instructions</h3>
      {drinksState.map((drinkInst) => (
        <p key={ Math.random() }>
          {drinkInst.strInstructions}
        </p>))}
      <button
        type="button"
      >
        Start Recipe
      </button>
    </div>
  );
}
