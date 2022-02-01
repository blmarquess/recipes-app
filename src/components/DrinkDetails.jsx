import React from 'react';

export default function DrinkDetails() {
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
