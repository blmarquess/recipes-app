export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));
export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));
export const dataCleaner = () => localStorage.clear();

export const URL = [
  { id: 'foods',
    foods: {
      ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
      nome: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      random: 'https://www.themealdb.com/api/json/v1/1/random.php',
      firstletter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      id: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
      categorias: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      nacionalidades: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      ingredientes: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    } },
  { id: 'drinks',
    drinks: {
      ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
      ingredientid: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=',
      nome: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      firstletter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
      random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      id: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
    } },
];

export const URL_IMGS = 'https://www.themealdb.com/images/ingredients/';

export const getImages = (item) => `${URL_IMGS}${item}.png`;

export const getDataApi = async (rota, destination, query) => {
  const setURL = URL.find((el) => el.id === rota)[rota][destination];
  const result = await fetch(`${setURL}${query}`)
    .then((response) => response.json()).then((data) => data);
  return result;
};

export const redirectToID = (id) => {
  if (id.meals) {
    const { idMeal } = id.meals[0];
    return `/foods/${idMeal}`;
  }
  if (id.drinks) {
    const { idDrink } = id.drinks[0];
    return `/drinks/${idDrink}`;
  }
};
