import React from 'react';

import '../../styles/header.scss';

import SearchBar from '../searchbar/SearchBar';

const Header = () => {
  return (
    <header>
      <h1>SPLENDID</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
