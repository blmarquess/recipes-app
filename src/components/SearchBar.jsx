import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDataApi, saveLocalData } from '../utils/tools';

import ButtonSD from './assets/ButtonSD';
import Input from './assets/Input';

export default function SearchBar() {
  const rota = useHistory().location.pathname.replace('/', '');

  const [searchQuery, setSearch] = useState({ query: '', option: '', data: [] });

  const updateQuery = (key, str) => setSearch({ ...searchQuery, [key]: str });

  const onClickSearch = () => {
    const { option, query } = searchQuery;
    getDataApi(rota, option, query).then((res) => {
      updateQuery('data', res);
      saveLocalData('dataAPI', res);
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
    <section>
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
