import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { getAds } from '../../actions/ads';

import '../../styles/ad.scss';
import Button from '@mui/material/Button';

const Ads = ({ categoryValue, getAds, ads: { ads, loading } }: any): any => {
  const history = useHistory();

  useEffect(() => {
    getAds();
  }, [getAds]);

  const filterAdsArray = () => {
    if (categoryValue == 'All items') {
      return ads;
    } else {
      return ads.filter((item: any) => item.category === categoryValue);
    }
  };

  const onClickAd = (e: any) => {
    history.push(`/ad/${e.target.closest('article').id}`);
  };

  const handleOnRentClick = (e: any) => {
    e.stopPropagation();
    history.push(`/rent/${e.target.closest('article').id}`);
  };

  return (
    <>
      {filterAdsArray().map((item: any, i: number) => {
        return (
          <article
            id={item._id}
            className='ad_article'
            key={i}
            onClick={(e) => onClickAd(e)}
          >
            <img className='ad_img' src={item.pic} />
            <div className='ad_top_row'>
              <div>
                <h2>{item.title}</h2>
                <p>{item.price[0]} $ / day</p>
              </div>
              <span>{item.category}</span>
            </div>
            <p className='desc_container'>{item.desc}</p>
            <Button
              className='rent_btn'
              variant='contained'
              onClick={handleOnRentClick}
            >
              RENT ME
            </Button>
          </article>
        );
      })}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  ads: state.ads,
});

export default connect(mapStateToProps, { getAds })(Ads);
