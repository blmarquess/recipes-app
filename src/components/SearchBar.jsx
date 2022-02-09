import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { recipeInFoco, recipesListAPI } from '../context/action';
import { DispatchContext } from '../context/store';

import ButtonSD from './assets/ButtonSD';
import Input from './assets/Input';

import { getDataApi, redirectToID } from '../utils/tools';

const searcBarStyle = `min-w-full px-4 py-8 grid-col-1 flex-col mb-8 bg-gray-200
  border-b border-l border-r border-gray-300 shadow-md z-20 transition-opacity`;

export default function SearchBar() {
  const history = useHistory();
  const dispatch = useContext(DispatchContext);
  const rota = history.location.pathname.replace('/', '').replace('/', '');
  const keyData = rota === 'foods' ? 'meals' : 'drinks';

  const [searchQuery, setSearch] = useState({ query: '', option: '', data: [] });

  const updateQuery = (key, str) => setSearch({ ...searchQuery, [key]: str });

  const onClickSearch = async () => {
    const { option, query } = searchQuery;
    await getDataApi(rota, option, query).then((res) => {
      if (res[keyData] === null) {
        return global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      if (res[keyData].length === 1) {
        dispatch(recipeInFoco(res));
        const nreRota = redirectToID(res);
        history.push(nreRota);
      }
      return dispatch(recipesListAPI(res));
    });
  };

  const validToDispatch = () => {
    const { query, option } = searchQuery;
    const errorMessage = 'Your search must have only 1 (one) character';
    if (query === '' || option === '') {
      return global.alert(errorMessage);
    }
    if (option === 'firstletter' && query.length > 1) {
      return global.alert(errorMessage);
    }
    return onClickSearch();
  };

  return (
    <section className={ searcBarStyle }>
      <Input
        type="text"
        wsize="100%"
        data-testid="search-input"
        name="query"
        onChange={ ({ target: { name, value } }) => updateQuery(name, value) }
      />
      <section className="radios-filter">
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="option"
            id="ingredient"
            value="ingredient"
            onChange={ ({ target: { name, value } }) => updateQuery(name, value) }
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="forName">
          <input
            type="radio"
            name="option"
            id="forName"
            value="nome"
            onChange={ ({ target: { name, value } }) => updateQuery(name, value) }
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            name="option"
            id="firstletter"
            value="firstletter"
            onChange={ ({ target: { name, value } }) => updateQuery(name, value) }
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </section>
      <ButtonSD wsize="100%" data-testid="exec-search-btn" onClick={ validToDispatch }>
        Buscar
      </ButtonSD>
    </section>
  );
}
