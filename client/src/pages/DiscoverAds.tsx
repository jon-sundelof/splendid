import { useEffect } from 'react';
import '../styles/discover.scss';
import { getAds } from '../actions/ads';

import Ads from '../components/ads/Ads';
import CategoriesList from '../components/list/CategoriesList';

const DiscoverAds = () => {
  return (
    <main className='discover_main_container'>
      <CategoriesList />
      <section className='ads_container'></section>
      <Ads />
    </main>
  );
};

export default DiscoverAds;
