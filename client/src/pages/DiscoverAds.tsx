import React from 'react';
import '../styles/discover.scss';

import CategoriesList from '../components/list/CategoriesList';

const DiscoverAds = () => {
  return (
    <main className='discover_main_container'>
      <CategoriesList />
    </main>
  );
};

export default DiscoverAds;
