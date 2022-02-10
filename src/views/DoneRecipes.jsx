import React, { useState } from 'react';
import HeaderProfile from '../components/HeaderNoSer';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function DoneRecipes() {
  const [filterDoneRecipes, setFilterDoneRecipes] = useState({
    filteredRecipes: [],
    isFilter: false,
  });

  const doneRecipesKeys = JSON.parse(localStorage.getItem('doneRecipes'));

  function filterFoods() {
    const foodsDoneRecipes = doneRecipesKeys.filter(({ type }) => type === 'food');
    setFilterDoneRecipes({
      filteredRecipes: foodsDoneRecipes,
      isFilter: true,
    });
  }

  function filterDrinks() {
    const drinksDoneRecipes = doneRecipesKeys.filter(({ type }) => type === 'drink');
    setFilterDoneRecipes({
      filteredRecipes: drinksDoneRecipes,
      isFilter: true,
    });
  }

  function filterAll() {
    setFilterDoneRecipes({
      filteredRecipes: [],
      isFilter: false,
    });
  }

  function showAllRecipes() {
    return (
      <section>
        { !filterDoneRecipes.isFilter && doneRecipesKeys
          .map((recipe, index) => (
            <DoneRecipeCard { ...recipe } index={ index } key={ recipe.id } />))}
      </section>
    );
  }

  function showFilterRecipes() {
    const { filteredRecipes, isFilter } = filterDoneRecipes;
    return (
      <section>
        { isFilter && filteredRecipes
          .map((recipe, index) => (
            <DoneRecipeCard { ...recipe } index={ index } key={ recipe.id } />))}
      </section>
    );
  }

  return (
    <div>
      <HeaderProfile title="Done Recipes" />
      <section>
        <button type="button" data-testid="filter-by-all-btn" onClick={ filterAll }>
          All
        </button>
        <button type="button" data-testid="filter-by-food-btn" onClick={ filterFoods }>
          Food
        </button>
        <button type="button" data-testid="filter-by-drink-btn" onClick={ filterDrinks }>
          Drinks
        </button>
      </section>
      { showAllRecipes() }
      { showFilterRecipes() }
    </div>
  );
}
