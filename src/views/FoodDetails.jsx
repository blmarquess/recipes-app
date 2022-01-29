import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApiMeals } from '../utils/tools';

export default function FoodDetails() {
  const [randomId, setRandomId] = useState([{ idMeal: 'loading...' }]);
  const pathId = useLocation().pathname.split('/foods/')[1];

  const randomMeal = async () => {
    const mealId = await getDataApiMeals('random');
    return mealId;
  };

  useEffect(() => {
    const setDataState = async () => {
      if (pathId === 'random') {
        return randomMeal().then((res) => setRandomId(res.meals));
      }
      if (pathId !== undefined && pathId !== '') {
        return getDataApiMeals('id', pathId).then((res) => setRandomId(res.meals));
      }
    };
    setDataState();
  }, [pathId]);

  console.log(randomId);

  return (
    <div>
      {randomId.map((meal) => <p key={ Math.random() }>{ meal.idMeal }</p>)}
    </div>
  );
}
