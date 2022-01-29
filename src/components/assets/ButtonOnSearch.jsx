import React, { useState } from 'react';
import searchIcon from '../../images/searchIcon.svg';

export default () => {
  const [btnsearch, setBtnSH] = useState(false);
  return (
    <section>
      {btnsearch
&& <input
  type="text"
  data-testid="search-input"
/>}
      <button
        src={ searchIcon }
        type="button"
        data-testid="search-top-btn"
        onClick={ () => setBtnSH(!btnsearch) }
      >
        <img src={ searchIcon } alt="profileIcon" />
      </button>
    </section>
  );
};
