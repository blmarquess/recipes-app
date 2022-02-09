import PropTypes from 'prop-types';
import React from 'react';

export default function CardCarossel(props) {
  const { num, imgSrc, title, category, strInstructions } = props;
  return (
    <div className="max-w-full w-full min-w-full flex" id={ num }>
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none
      lg:rounded-ltext-center overflow-hidden"
        title="Woman holding a mug"
        style={ {
          backgroundImage: `url(${imgSrc})`,
          width: '100px',
          backgroundSize: 'cover',
        } }
      />
      <div
        className="border-2 border-gray-200 bg-white p-4 flex flex-col
  justify-between leading-normal"
      >
        <div className="mb-8" data-testid={ `${num}-recomendation-card` }>
          <div
            className="text-gray-900 font-bold text-xl mb-2"
            data-testid={ `${num}-recomendation-title` }
          >
            { title }
          </div>
          <p className="text-gray-700 text-base">
            {strInstructions}
          </p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={ imgSrc } alt="Avatar" />
          <div className="text-sm">
            <p
              className="text-gray-900 leading-none"
              data-testid={ `${num}-recomendation-category` }
            >
              { category }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardCarossel.propTypes = {
  category: PropTypes.string,
  imgSrc: PropTypes.string,
  num: PropTypes.string,
  title: PropTypes.string,
  strInstructions: PropTypes.string,
}.isRequired;
