import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard(props) {
  const { srcName, toCkick, rota } = props;

  return (
    <section className="card">
      <button
        type="button"
        onClick={ () => toCkick(srcName, rota) }
        data-testid={ `${srcName}-category-filter` }
      >
        { srcName }
      </button>
    </section>
  );
}

CategoryCard.propTypes = {
  srcName: PropTypes.string,
}.isRequired;
