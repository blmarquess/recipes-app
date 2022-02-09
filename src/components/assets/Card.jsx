import PropTypes from 'prop-types';
import React from 'react';
import CardS from './CardStyle';

export default function Card(props) {
  const { srcName, imgSRC, index, keyItem } = props;
  return (
    <CardS data-testid={ `${index}-recipe-card` } data-id={ keyItem }>
      <img
        data-id={ keyItem }
        data-testid={ `${index}-card-img` }
        className="card-img"
        src={ imgSRC }
        alt={ `imagem do ${srcName}` }
      />
      <span data-id={ keyItem } data-testid={ `${index}-card-name` }>{ srcName }</span>
    </CardS>
  );
}

Card.propTypes = {
  srcName: PropTypes.string,
  imgSRC: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
