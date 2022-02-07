import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard(props) {
  console.log('props', props);
  const { srcName } = props;

  return (
    <section className="card">
      <button
        type="button"
        onClick={ ({ target }) => console.log(target) }
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
