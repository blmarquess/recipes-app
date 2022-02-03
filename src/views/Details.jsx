import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation, useParams } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';
// import { clearSingleID } from '../redux/actions';

export default function Details() {
  // const { id } = useParams();
  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const data = useSelector((state) => state.searchdata);
  const recipe = data.random;
  const { isDone } = data;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (recipe[objSelector]) {
  //     return console.log(recipe[objSelector]);
  //   }
  //   const setDataState = async () => getDataApi(rota, 'id', id).then((res) => {
  //     dispatch(SearchRandomAPI(res));
  //   });

  //   if (data[objSelector][0]) {
  //     setDataState();
  //   }
  // }, [id, rota, objSelector, data, dispatch, recipe]);

  return (
    <LayoutPage>
      { isDone
        && rota === 'foods'
        ? <FoodDetail { ...recipe[objSelector][0] } />
        : <DrinkDetails { ...recipe[objSelector][0] } />}
    </LayoutPage>
  );
}
