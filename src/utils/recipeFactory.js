export default function recipeFactory(obAPI) {
  const ingrdientLists = Object
    .entries(obAPI).filter((key) => key[0]
      .includes('strIngredient'))
    .map((recipe) => recipe[1]);

  const ingrdientListsMeasure = Object
    .entries(obAPI).filter((key) => key[0]
      .includes('strMeasure'))
    .map((recipe) => recipe[1]);

  const listIngredients = [];
  for (let i = 0; i < ingrdientLists.length; i += 1) {
    const recipe = {
      ingredient: ingrdientLists[i],
      measure: ingrdientListsMeasure[i],
    };
    listIngredients.push(recipe);
  }
  return listIngredients
    .filter((item) => item.ingredient !== ' '
      && item.ingredient !== null
      && item.ingredient !== '');
}
