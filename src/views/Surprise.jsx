import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getDataApi, redirectToID } from '../utils/tools';
import { recipeInFoco } from '../context/action';
import { DispatchContext } from '../context/store';

export default function Surprise() {
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  useEffect(() => {
    const setDataState = async () => getDataApi(id, 'random', '').then((res) => {
      dispatch(recipeInFoco(res));
      const toGo = redirectToID(res);
      return history.push(toGo);
    }); setDataState();
  }, [id, dispatch, history]);
  return (<div />);
}
