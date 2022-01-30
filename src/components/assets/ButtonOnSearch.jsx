import React, { useState } from 'react';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar';

export default () => {
  const [btnsearch, setBtnSH] = useState(false);
  return (
    <section>
      <button
        src={ searchIcon }
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setBtnSH(!btnsearch) }
      >
        <img src={ searchIcon } alt="profileIcon" />
      </button>
      { btnsearch && <SearchBar /> }
    </section>
  );
};
