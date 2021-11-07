import { useEffect, useState } from 'react';
import '../styles/discover.scss';
import { getAds } from '../actions/ads';

import Ads from '../components/ads/Ads';
import CategoriesList from '../components/list/CategoriesList';

const DiscoverAds = () => {
  const [category, setCategory] = useState<any>('All items');

  return (
    <main className='discover_main_container'>
      <CategoriesList setCategoryDiscover={setCategory} />
      <section className='ads_container'></section>
      <Ads categoryValue={category} />
    </main>
  );
};

export default DiscoverAds;
