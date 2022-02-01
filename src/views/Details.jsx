import React from 'react';
// import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/assets/layout';
// import { getDataApi } from '../utils/tools';
// import FoodDetail from '../components/FoodDetail';
// import DrinkDetails from '../components/DrinkDetails';

export default function Details() {
  // const [detailState, setDetailState] = useState([]);
  const pathId = useLocation().pathname.split('/foods/')[1];

  // useEffect(() => {
  //   const setDataState = async () => {
  //     if (pathId === 'random') {
  //       return getDataApi(pathId, 'random').then((res) => setDetailState(res));
  //     }
  //     if (pathId !== undefined && pathId !== '') {
  //       return getDataApi('id', pathId).then((res) => setDetailState(res));
  //     }
  //   };
  //   setDataState();
  // }, [pathId]);

  return (
    <Layout>
      <p>
        {pathId}
      </p>
      {/* <FoodDetail { ...detailState } />
      <DrinkDetails { ...detailState } /> */}
    </Layout>
  );
}
