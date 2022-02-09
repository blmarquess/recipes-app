import PropTypes from 'prop-types';
import React from 'react';

export default function CardCarossel(props) {
  const { num, imgSrc, title, category, strInstructions } = props;
  return (
    <div
      className="max-w-full max-h-32 w-full min-w-full flex border-2 border-gray-100"
      id={ num }
    >
      <div
        className="w-24 flex-none bg-cover overflow-hidden"
        title={ title }
        style={ {
          backgroundImage: `url(${imgSrc})`,
          width: '100px',
          backgroundSize: 'percentage',
        } }
      />
      <div
        className="border-2 border-gray-200 bg-white p-4 flex flex-col
  justify-between leading-normal"
      >
        <div className="mb-10" data-testid={ `${num}-recomendation-card` }>
          <div
            className="text-gray-900 font-bold text-xl mb-2"
            data-testid={ `${num}-recomendation-title` }
          >
            { title }
          </div>
          <p className="text-gray-700 text-base card-recommended h-10 w-16">
            {strInstructions}
          </p>
        </div>
        <div className="flex items-center -ml-2 -mt-12 bg-gray-200 w-20 rounded-full">
          <img
            className="w-8 h-8 rounded-full mr-1 -ml-2 border-2 border-gray-200"
            src={ imgSrc }
            alt="Avatar"
          />
          <div className="text-xs p-1">
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
