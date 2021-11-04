import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TargetedAd from '../components/ads/TargetedAd';

const Ad = () => {
  const param: any = useParams();
  useEffect(() => {
    console.log(param.id);
  }, []);
  return (
    <div>
      <TargetedAd id={param.id} />
    </div>
  );
};

export default Ad;
