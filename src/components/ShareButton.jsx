import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import shareIcon from '../images/shareIcon.svg';
import AlertPOP from './assets/AlertPOP';

import { barShareButton } from './assets/Tailwind';

function ShareButton() {
  const [copy, setCopy] = useState(false);

  const id = useLocation().pathname;
  const el = `http://localhost:3000${id}`;

  const copyClipboard = () => {
    navigator.clipboard.writeText(el);
    setCopy(true);
  };

  return (
    <div className={ barShareButton }>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyClipboard }
      >
        <img src={ shareIcon } alt="Share Icon" />
      </button>
      { copy && <AlertPOP alert="Link copied!" />}
    </div>
  );
}

export default ShareButton;
