import React from 'react';
import { useDispatch } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { useHistory } from 'react-router-dom';
import { searchSW } from '../redux/actions/'

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    history.push("/profile");
  }

  return (
    <div clasname="header-app">
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => handleClick() }
      >
        <img src={ profileIcon } />
      </button>
      <h2 data-testid="page-title"> 
      Page Title    
      </h2>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ () => dispatch(searchSW())}
      >
        <img src={ searchIcon } />
      </button>
      

    </div>);
}
