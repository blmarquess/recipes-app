// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { saveLocalData } from './tools';

// const dispatch = useDispatch();
export const URL = [
  { id: 'foods',
    foods: {
      ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
      nome: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      random: 'https://www.themealdb.com/api/json/v1/1/random.php',
      firstletter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      id: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    } },
  { id: 'drinks',
    drinks: {
      ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
      nome: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      firstletter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
      random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      id: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    } },
];

export const useAPI = async (rota, destination, query) => {
  const setURL = URL.find((el) => el.id === rota)[rota][destination];

  const [state, setState] = useState({});

  await axios.get(`${setURL}${query}`).then((response) => setState((response.data)));

  saveLocalData('byMyHock', state);

  return state;
};
