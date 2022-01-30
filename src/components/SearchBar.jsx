import React, { useState } from 'react';
import { getDataApiDrinks } from '../utils/tools';
import ButtonSD from './assets/ButtonSD';

export default () => {
  const [searchQuery, setSearch] = useState({ query: '', option: '', data: {} });

  const updateQuery = (key, str) => {
    setSearch({ ...searchQuery, [key]: str });
  };

  const onClickSearch = () => {
    const { option, query } = searchQuery;
    getDataApiDrinks(option, query).then((res) => updateQuery(data, res));
  };

  return (
    <>
      <input type="text" data-testid="search-input" />
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
      <ButtonSD data-testid="exec-search-btn" onClick={ onClickSearch }>
        Buscar
      </ButtonSD>
    </>
  );
};
