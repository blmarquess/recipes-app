import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { getDataApi } from '../utils/tools';

export const StoreContext = React.createContext();
export const DispatchContext = React.createContext();
export const DataRecipesContext = React.createContext();

export const initStore = {
  user: {},
  recipefocus: [],
  favorites: [],
  inprogress: [],
};

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initStore);
  const [recipies, setRecipes] = useState([]);

  useEffect(() => {
    const upData = (dat) => setRecipes(dat);
    const initialState = () => {
      getDataApi('foods', 'all').then((res) => {
        upData(res);
      });
    };
    initialState();
  }, []);

  return (
    <StoreContext.Provider value={ store }>
      <DataRecipesContext.Provider value={ recipies }>
        <DispatchContext.Provider value={ dispatch }>
          { children }
        </DispatchContext.Provider>
      </DataRecipesContext.Provider>
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
