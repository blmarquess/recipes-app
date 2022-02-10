import React from 'react';
import PropTypes from 'prop-types';

export default function RecipesProgress({ id, rota }) {
  console.log('recipiesPROG', id, rota);
  return (
    <div>
      <h2>RecipesProgress</h2>
    </div>
  );
}

RecipesProgress.propTypes = { id: PropTypes.string, rota: PropTypes.string }.isRequired;
