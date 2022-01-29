import React from 'react';
import ButtonSD from './assets/ButtonSD';

export default () => {
  const calabocaLINT = 'null -> calabocaLINT';
  console.log(calabocaLINT);

  return (
    <>
      <section className="radios-filter">
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="opt"
            id="ingredient"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="forName">
          <input
            type="radio"
            name="opt"
            id="forName"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            name="opt"
            id="first-letter"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </section>
      <ButtonSD data-testid="exec-search-btn"> Buscar </ButtonSD>
    </>
  );
};
