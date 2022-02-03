import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getDataApi, redirectToID } from '../utils/tools';
import { SearchRandomAPI } from '../redux/actions';

export default function Surprise() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const setDataState = async () => getDataApi(id, 'random', '').then((res) => {
      dispatch(SearchRandomAPI(res));
      const toGo = redirectToID(res);
      return history.push(toGo);
    }); setDataState();
  }, [id, dispatch, history]);
  return (<div />);
}
