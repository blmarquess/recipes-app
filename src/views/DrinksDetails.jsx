import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApi } from '../utils/tools';

export default function DrinksDetails() {
  // const [drinksState, setDrinkState] = useState([{ idDrink: 'loading...' }]);
  const pathId = useLocation().pathname.split('/drinks/')[1];

  const randomDrink = async () => {
    const drinkId = await getDataApi('random');
    return drinkId;
  };

  useEffect(() => {
    const setDataState = async () => {
      if (pathId === 'random') {
        return randomDrink().then((res) => setDrinkState(res.drinks));
      }
      if (pathId !== undefined && pathId !== '') {
        return getDataApi('id', pathId).then((res) => setRandomId(res.drinks));
      }
    };
    setDataState();
  }, [pathId]);

  return (
    <div />
  );
}
