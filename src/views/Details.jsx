import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LayoutPage from '../components/assets/LayoutPage';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';

export default function Details() {
  // const { id } = useParams();
  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const data = useSelector((state) => state.searchdata.random);

  useEffect(() => { });
  // console.log('testes');
  // const setDataState = async () => getDataApi(rota, 'id', id).then((res) => {
  //   dispatch(SearchRandomAPI(res));
  // });

  // if (data[objSelector][0]) {
  //   setDataState();
  // }
  // }, [id, rota, objSelector, data]);
  // console.log(data[objSelector][0]);

  return (
    <LayoutPage>
      { data.length > 0
        && rota === 'foods'
        ? <FoodDetail { ...data[objSelector][0] } />
        : <DrinkDetails { ...data[objSelector][0] } />}
    </LayoutPage>
  );
}
