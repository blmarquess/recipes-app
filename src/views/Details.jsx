import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';
import { readLocalData, getDataApi, saveLocalData } from '../utils/tools';

export default function Details() {
  const { id } = useParams();
  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const switchID = objSelector === 'drinks' ? 'idDrink' : 'idMeal';
  const localData = readLocalData('DetailItem');

  const [detailState, setDetails] = useState([]);

  useEffect(() => {
    const updateState = (itm) => setDetails(...itm[objSelector]);

    const hasData = async () => {
      if (localData === null) {
        console.log('Primeiro IF!');
        await getDataApi(rota, 'id', id).then((res) => {
          updateState(res);
          saveLocalData('DetailItem', res);
        });
        return console.log('');
      }

      if (detailState.length === 0) {
        await getDataApi(rota, 'id', id).then((res) => {
          updateState(res);
          saveLocalData('DetailItem', res);
        });
        return console.log('');
      }
    };
    hasData();
  }, [objSelector, switchID, id, rota, localData, detailState]);

  return (
    <LayoutPage>
      { detailState.lenght > 0
        && rota === 'foods'
        ? <FoodDetail { ...detailState } />
        : <DrinkDetails { ...detailState } />}
    </LayoutPage>
  );
}
