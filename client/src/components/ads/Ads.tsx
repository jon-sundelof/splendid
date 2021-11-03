import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAds } from '../../actions/ads';

import '../../styles/ad.scss';

const Ads = ({ getAds, ads: { ads, loading } }: any): any => {
  useEffect(() => {
    setTimeout(() => {
      getAds();
    }, 200);
  }, [getAds]);

  return (
    <>
      {ads.map((item: any, i: number) => {
        return (
          <article className='ad_article' key={i}>
            <div className='ad_top_row'>
              <h2>{item.title}</h2>
              <span>{item.category}</span>
            </div>

            <p>{item.desc}</p>
            {/* <span>Value: {item.value} $</span> */}
            <div className='ads_prices'>
              <p>1 day: {item.price[0]} $</p>
              <p>3 days: {item.price[0]} $</p>
              <p>7 days: {item.price[2]} $</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

Ads.propTypes = {
  getAds: PropTypes.func.isRequired,
  ads: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  ads: state.ads,
});

export default connect(mapStateToProps, { getAds })(Ads);
