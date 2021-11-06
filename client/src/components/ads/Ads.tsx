import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAds } from '../../actions/ads';

import '../../styles/ad.scss';

const Ads = ({ getAds, ads: { ads, loading } }: any): any => {
  const history = useHistory();

  useEffect(() => {
    getAds();
  }, [getAds]);

  const onClickAd = (e: any) => {
    history.push(`/ad/${e.target.closest('article').id}`);
    console.log(e.target);
  };
  return (
    <>
      {ads.map((item: any, i: number) => {
        return (
          <article
            id={item._id}
            className='ad_article'
            key={i}
            onClick={(e) => onClickAd(e)}
          >
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
            <img src={item.avatar} />
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
