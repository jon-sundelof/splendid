import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TargetedAd from '../components/ads/TargetedAd';

const Ad = () => {
  const param: any = useParams();
  return (
    <main className='single_ad_page_container'>
      <TargetedAd id={param.id} />
    </main>
  );
};

export default Ad;
