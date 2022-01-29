import styled from 'styled-components';

import searchIcon from '../images/searchIcon.svg';


<section className="search-container" action="//llamaswill.tumblr.com/search">

  <input id="search-box" type="text" class="search-box" name="q" />
    <span class="glyphicon glyphicon-search search-icon"></span>
  <input type="submit" id="search-submit" />

  <button type="button" data-testid="search-top-btn">
        <img src={ searchIcon } />
  </button>
</section>

const SearchBox = styled.input