import React, { useContext, useLayoutEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
// import FoodDetail from '../components/FoodDetail';
// import DrinkDetails from '../components/DrinkDetails';
import { readLocalData, getDataApi } from '../utils/tools';
import { DispatchContext, StoreContext } from '../context/store';
import { recipeInFoco } from '../context/action';

export default function Details() {
  const { id } = useParams();

  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const switchID = objSelector === 'drinks' ? 'idDrink' : 'idMeal';
  const localData = readLocalData('DetailItem');
  const localDataID = localData !== null
    ? localData.recipefocus[objSelector][0][switchID] : 0;
  console.log(localDataID);

  const recipeOnFoco = useContext(StoreContext).recipefocus;
  const dispatch = useContext(DispatchContext);
  console.log(recipeOnFoco);

  useLayoutEffect(() => {
    const ferifInitDetails = async () => {
      if (localData === null && recipeOnFoco.length === 0) {
        await getDataApi(rota, 'id', id).then((res) => {
          dispatch(recipeInFoco(res));
        });
      }
      // if ()
    };
    ferifInitDetails();
  }, [dispatch, id, localData, recipeOnFoco, rota]);

  // useEffect(() => {
  //   const updateState = (itm) => setDetails(...itm[objSelector]);

  //   const hasData = async () => {
  //     if (localData === null) {
  //       console.log('Primeiro IF!');
  //       await getDataApi(rota, 'id', id).then((res) => {
  //         updateState(res);
  //         saveLocalData('DetailItem', res);
  //       });
  //       return console.log('');
  //     }

  //     if (detailState.length === 0) {
  //       await getDataApi(rota, 'id', id).then((res) => {
  //         updateState(res);
  //         saveLocalData('DetailItem', res);
  //       });
  //       return console.log('');
  //     }
  //   };
  //   hasData();
  // }, []);

  return (
    <LayoutPage>
      {/* <FoodDetail { ...detailState } /> */}
      {/* <DrinkDetails { ...detailState } /> */}
    </LayoutPage>
  );
}
