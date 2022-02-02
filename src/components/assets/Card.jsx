import PropTypes from 'prop-types';
import React from 'react';

export default function Card(props) {
  const { srcName, imgSRC, index } = props;
  return (
    <section data-testid={ `${index}-recipe-card` } className="card">
      <img
        className="card-img"
        src={ imgSRC }
        alt={ `imagem do ${srcName}` }
        data-testid={ `${index}-card-img` }
      />
      <span data-testid={ `${index}-card-name` }>{ srcName }</span>
    </section>
  );
}

Card.propTypes = {
  srcName: PropTypes.string,
  imgSRC: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
