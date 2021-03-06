import React, { useContext, useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';
import { DispatchContext, StoreContext } from '../context/store';
import { recipeInFoco } from '../context/action';
import { readLocalData, clearFocusItem } from '../utils/storageTools';
import { getDataApi, getLocalCofocusID } from '../utils/tools';

export default function Details() {
  const { id } = useParams();

  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const localData = readLocalData('DetailItem');
  const localDataID = localData !== null && getLocalCofocusID(localData, objSelector);

  const recipeOnFoco = useContext(StoreContext).recipefocus;
  const dispatch = useContext(DispatchContext);

  useLayoutEffect(() => {
    const ferifInitDetails = async () => {
      if (localData === null && recipeOnFoco.length === 0) {
        await getDataApi(rota, 'id', id).then((res) => {
          dispatch(recipeInFoco(res));
        }).catch(() => []);
      }
      if (id !== localDataID) {
        clearFocusItem();
        await getDataApi(rota, 'id', id).then((res) => {
          dispatch(recipeInFoco(res));
        }).catch(() => []); // !
      }
      if (localData && recipeOnFoco.length === 0) {
        dispatch(recipeInFoco(localData.recipefocus));
      }
    };
    ferifInitDetails();
  }, [dispatch, id, localData, localDataID, objSelector, recipeOnFoco, rota]);

  return (
    <LayoutPage>
      {localData !== null && objSelector === 'meals'
        && recipeOnFoco.meals && recipeOnFoco.meals.length === 1
        && <FoodDetail />}

      {localData !== null && objSelector === 'drinks'
        && recipeOnFoco.drinks && recipeOnFoco.drinks.length === 1
        && <DrinkDetails />}
    </LayoutPage>
  );
}
