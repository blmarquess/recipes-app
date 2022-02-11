import React from 'react';
import PropTypes from 'prop-types';

export default function RecipesProgress({ id, rota }) {
  console.log('recipiesPROG', id, rota);
  return (
    <div className="mt-36">
      <h2>
        Estamos na rota:
        {' '}
        {rota}
        {' '}
        com o id:
        {id}
      </h2>
    </div>
  );
}

RecipesProgress.propTypes = { id: PropTypes.string, rota: PropTypes.string }.isRequired;
