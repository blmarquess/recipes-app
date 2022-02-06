import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { getDataApi } from '../utils/tools';
import { recipesListAPI } from './action';

export const StoreContext = React.createContext();
export const DispatchContext = React.createContext();

export const initStore = {
  user: {},
  recipefocus: [],
  favorites: [],
  inprogress: [],
  recipeslist: [],
};

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initStore);
  // const [recipies, dispetRL] = useReducer([]);

  useEffect(() => {
    const upData = (dat) => dispatch(recipesListAPI(dat));
    const initialState = () => {
      getDataApi('foods', 'all').then((res) => {
        upData(res);
      });
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
