import React, { useState } from 'react';
import { getDataApiDrinks } from '../utils/tools';
import ButtonSD from './assets/ButtonSD';

export default () => {
  const [searchQuery, setSearch] = useState({ query: '', option: '' });

  const updateQuery = (key, str) => {
    setSearch({ ...searchQuery, [key]: str });
  };

  const onClickSearch = () => {
    const { option, query } = searchQuery;
    // const { match: { pharms}} = props;
    getDataApiDrinks(option, query);
  };

  return (
    <>
      <section className="radios-filter">
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="option"
            id="ingredient"
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
