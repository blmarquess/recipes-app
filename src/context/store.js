import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { getDataApi } from '../utils/tools';
import { recipesListAPI, recipesCategory } from './action';

export const StoreContext = React.createContext();
export const DispatchContext = React.createContext();

export const initStore = {
  user: {},
  recipefocus: [],
  favorites: [],
  inprogress: [],
  recipeslist: [],
  recipesrecomend: [],
  recipescategory: [],
  hasfilter: '',
};

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initStore);

  useEffect(() => {
    const upDataRecipies = (dat) => dispatch(recipesListAPI(dat));
    const upDataCategory = (dat) => dispatch(recipesCategory(dat));
    const initialState = () => {
      getDataApi('foods', 'categorias').then((resp) => upDataCategory(resp));
      getDataApi('foods', 'all').then((res) => upDataRecipies(res));
    };
    initialState();
  }, []);

  return (
    <StoreContext.Provider value={ store }>
      <DispatchContext.Provider value={ dispatch }>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
