export const URL = [
  { id: 'foods',
    foods: {
      ingredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
      nome: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
      random: 'https://www.themealdb.com/api/json/v1/1/random.php',
      firstletter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
      id: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
      categorias: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      categorylist: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
      nacionalidades: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      ingredientes: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      all: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    } },
  { id: 'drinks',
    drinks: {
      ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
      categorias: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      categorylist: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=',
      ingredientid: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=',
      nome: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      firstletter: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=',
      random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      id: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
      all: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    } },
];

export const URL_IMGS = 'https://www.themealdb.com/images/ingredients/';

export const getImages = (item) => `${URL_IMGS}${item}.png`;

export const getDataApi = async (rota, destination, query = '') => {
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

export const getLocalCofocusID = (data, rota) => {
  const numAleatoreo = 58457441;
  if (rota === 'meals' && data.recipefocus.meals) {
    return data.recipefocus.meals[0].idMeal;
  }
  if (rota === 'drinks' && data.recipefocus.drinks) {
    return data.recipefocus.drinks[0].idDrink;
  }
  return numAleatoreo;
};

export const refactoryYtUrl = (url) => url
  .replace('youtube.com/watch?v=', 'youtube-nocookie.com/embed/');

export const makeCategoriList = (args) => Object.values([...args[objSelector]
  .slice(0, '+5')])
  .reduce((acc, crv) => Object.assign(acc, { [crv.strCategory]: false }), {});

export const setFilterCategory = (objFilter) => {
  const situation = Object.values(objFilter).every((arr) => arr);
  if (situation) {
    return console.log('true');
  } return console.log('false');
};
