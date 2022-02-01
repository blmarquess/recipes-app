import React from 'react';

export default function FoodDetail() {
  // const [mealState, setRandomId] = useState([]);

  return (
    <div>
      {/* {mealState.map((meal) => (
        <div
          key={ Math.random() }
        >
          <img src={ meal.strMealThumb } alt={ meal.strMeal } />
          <h2>{ meal.strMeal }</h2>
          <h6>{ meal.strCategory }</h6>
        </div>
      ))}
      <h3>Ingredients</h3>
      {mealState
        .filter((mealIgr, i) => (`${mealIgr.strIngredient}${i}` !== null || ''
        ? (<span>{`${mealIgr.strIngredient}${i}`}</span>) : null
      ))}
      <h3>Instructions</h3>
      {mealState.map((mealInst) => (
        <p key={ Math.random() }>
          {mealInst.strInstructions}
        </p>))}
      <h3>Vídeo</h3>
      {mealState.length > 0
      && <iframe
        src={ `https://www.youtube.com/embed/${mealState[0].strYoutube.split('v=')[1]}` }
        frameBorder="0"
        allowFullScreen
        title="video"
        data-testid="video"
      />} */}
      <button
        type="button"
      >
        Start Recipe
      </button>
    </div>
  );
}
