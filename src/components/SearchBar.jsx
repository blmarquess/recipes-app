import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDataApi } from '../utils/tools';
import { SearchDataAPI } from '../redux/actions';

import ButtonSD from './assets/ButtonSD';
import Input from './assets/Input';

export default function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const rota = history.location.pathname.replace('/', '').replace('/', '');
  const keyData = rota === 'foods' ? 'meals' : 'drinks';
  const keyID = rota === 'foods' ? 'idMeal' : 'idDrink';

  const [searchQuery, setSearch] = useState({ query: '', option: '', data: [] });

  const updateQuery = (key, str) => setSearch({ ...searchQuery, [key]: str });

  const onClickSearch = async () => {
    const { option, query } = searchQuery;
    await getDataApi(rota, option, query).then((res) => {
      if (res[keyData] === null) {
        return global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      dispatch(SearchDataAPI(res[keyData]));
      updateQuery('data', res);
      if (res[keyData].length === 1) {
        history.push(`/${rota}/${res[keyData][0][keyID]}`);
      }
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