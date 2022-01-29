import axios from 'axios';

export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));
export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));

export const API_MEAL = {
  ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  nome: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  random: 'https://www.themealdb.com/api/json/v1/1/random.php',
};

export const API_DRINKS = {
  ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  nome: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  firstletter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
  random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
};

export const getDataApiDrinks = async (destination, query = '') => {
  const data = await axios.get(`${API_DRINKS[destination]}${query}`)
    .then((response) => response.data);
  return data;
};

export const getDataApiMeals = async (destination, query = '') => {
  const data = await axios.get(`${API_MEAL[destination]}${query}`)
    .then((response) => response.data);
  return data;
};
