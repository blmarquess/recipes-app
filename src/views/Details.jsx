import React, { useContext, useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';
import { readLocalData, getDataApi, getLocalCofocusID } from '../utils/tools';
import { DispatchContext, StoreContext } from '../context/store';
import { recipeInFoco } from '../context/action';

export default function Details() {
  const { id } = useParams();

  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  // const switchID = objSelector === 'drinks' ? 'idDrink' : 'idMeal';
  const localData = readLocalData('DetailItem');
  const localDataID = localData !== null && getLocalCofocusID(localData, objSelector);
  // console.log('id :', localDataID);

  const recipeOnFoco = useContext(StoreContext).recipefocus;
  const dispatch = useContext(DispatchContext);
  // console.log(recipeOnFoco);

  useLayoutEffect(() => {
    const ferifInitDetails = async () => {
      if (localData === null && recipeOnFoco.length === 0) {
        console.log('1º IF');
        await getDataApi(rota, 'id', id).then((res) => {
          dispatch(recipeInFoco(res));
        });
      }
      if (id !== localDataID) {
        console.log('2º IF');
        localStorage.removeItem('DetailItem');
        await getDataApi(rota, 'id', id).then((res) => {
          dispatch(recipeInFoco(res));
        });
        // return '';
      }
      if (localData && recipeOnFoco.length === 0) {
        console.log('3º IF');
        dispatch(recipeInFoco(localData.recipefocus));
      }
    };
    ferifInitDetails();
  }, [dispatch, id, localData, localDataID, recipeOnFoco, rota]);

  return (
    <LayoutPage>
      Testes!
      {objSelector === 'meals'
        && recipeOnFoco.length === 0
        && <FoodDetail />}

      {objSelector === 'drinks'
        && recipeOnFoco.length === 0
        && <DrinkDetails { ...recipeOnFoco[0] } />}

    </LayoutPage>
  );
}
