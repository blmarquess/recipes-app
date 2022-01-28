import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// import { switchSearch } from '../redux/actions/index';

export default function Header() {
  const history = useHistory();
  // const dispatch = useDispatch();

  function handleClick() {
    history.push('/profile');
  }

  return (
    <div clasname="header-app">
      <button
        src={ profileIcon }
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => handleClick() }
      >
        <img src={ profileIcon } alt="teste" />
      </button>
      <h2 data-testid="page-title">
        Page Title
      </h2>
      <button
        src={ searchIcon }
        type="button"
        data-testid="search-top-btn"
        // onClick={ () => dispatch(switchSearch()) }
      >
        <img src={ searchIcon } alt="teste" />
      </button>
    </div>);
}
