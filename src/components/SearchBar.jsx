import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDataApiMeals, getDataApiDrinks } from '../utils/tools';
import ButtonSD from './assets/ButtonSD';
import { SearchDataAPI, setAlert } from '../redux/actions';

export default function SearchBar() {
  const dispatch = useDispatch();

  const rota = useLocation().pathname;

  const [searchQuery, setSearch] = useState({ query: '', option: '' });

  const updateQuery = (key, str) => setSearch({ ...searchQuery, [key]: str });

  const onClickSearch = () => {
    const { option, query } = searchQuery;
    if (rota === '/foods') {
      getDataApiMeals(option, query).then((res) => {
        dispatch(SearchDataAPI(res));
      });
    }

    if (rota === '/drinks') {
      getDataApiDrinks(option, query).then((res) => {
        dispatch(SearchDataAPI(res));
      });
    }
  };

  const validToDispatch = () => {
    const { query, option } = searchQuery;
    if (query === '') {
      return dispatch(setAlert(true));
    }
    if (option === 'first-letter' && query.length > 1) {
      return dispatch(setAlert(true));
    }
    return onClickSearch();
  };

  return (
    <>
      <input
        type="text"
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
            id="first-letter"
            value="firstletter"
            onChange={ ({ target: { name, value } }) => updateQuery(name, value) }
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </section>
      <ButtonSD data-testid="exec-search-btn" onClick={ validToDispatch }>
        Buscar
      </ButtonSD>
    </>
  );
}
