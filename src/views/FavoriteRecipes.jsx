import React, { useState, useEffect } from 'react';
import HeaderNoSer from '../components/HeaderNoSer';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

export default function FavoriteRecipes() {
  const [favoriteRecipesKeys, setFavoriteRecipesKeys] = useState(null);
  const [filterFavoriteRecipes, setFilterFavoriteRecipes] = useState({
    filteredRecipes: [],
    isFilter: false,
  });

  useEffect(() => {
    setFavoriteRecipesKeys(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  function filterFoods() {
    const foodsFavoriteRecipes = favoriteRecipesKeys
      .filter(({ type }) => type === 'food');
    setFilterFavoriteRecipes({
      filteredRecipes: foodsFavoriteRecipes,
      isFilter: true,
    });
  }

  function filterDrinks() {
    const drinksFavoriteRecipes = favoriteRecipesKeys
      .filter(({ type }) => type === 'drink');
    setFilterFavoriteRecipes({
      filteredRecipes: drinksFavoriteRecipes,
      isFilter: true,
    });
  }

  function filterAll() {
    setFilterFavoriteRecipes({
      filteredRecipes: [],
      isFilter: false,
    });
  }

  function showAllRecipes() {
    return (
      <section>
        { !filterFavoriteRecipes.isFilter && favoriteRecipesKeys.map((recipe, index) => (
          <FavoriteRecipeCard
            teste={ setFavoriteRecipesKeys }
            { ...recipe }
            index={ index }
            key={ recipe.id }
          />))}
      </section>
    );
  }

  function showFilterRecipes() {
    const { filteredRecipes, isFilter } = filterFavoriteRecipes;
    return (
      <section>
        { isFilter && filteredRecipes
          .map((recipe, index) => (
            <FavoriteRecipeCard { ...recipe } index={ index } key={ recipe.id } />))}
      </section>
    );
  }

  return (
    <div>
      <HeaderNoSer title="Favorite Recipes" />
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
      { favoriteRecipesKeys && showAllRecipes() }
      { favoriteRecipesKeys && showFilterRecipes() }
    </div>
  );
}
