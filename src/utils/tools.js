export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));
export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));

export const API_MEAL = {
  ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  nome: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  random: 'https://www.themealdb.com/api/json/v1/1/random.php',
  firstletter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  id: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
};

export const API_DRINKS = {
  ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  nome: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  firstletter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  id: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
};

export const getDataApiDrinks = async (destination, query) => {
  const data = await fetch(`${API_DRINKS[destination]}${query}`)
    .then((response) => response.json());
  return data;
};

export const getDataApiMeals = async (destination, query) => {
  const data = await fetch(`${API_MEAL[destination]}${query}`)
    .then((response) => response.json());
  return data;
};
