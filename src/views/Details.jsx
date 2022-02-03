import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/assets/Layout';
import FoodDetail from '../components/FoodDetail';
import DrinkDetails from '../components/DrinkDetails';

export default function Details() {
  const { id } = useParams();
  const rota = useLocation().pathname.replace('/', '').split('/')[0];
  const objSelector = rota.includes('drinks') ? 'drinks' : 'meals';
  const data = useSelector((state) => state.searchdata.random);

  useEffect(() => {
    if (data !== undefined) {
      return console.log('data: ', data[objSelector]);
    }

    getDataToDispatch();
  }, [data, id, objSelector]);

  return (
    <Layout>
      {rota === 'foods'
        ? <FoodDetail { ...data[objSelector][0] } />
        : <DrinkDetails { ...data[objSelector][0] } />}
    </Layout>
  );
}
