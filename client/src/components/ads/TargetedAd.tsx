import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTargetedAd } from '../../actions/ads';
import targetedAd from '../../reducers/targetedAd';

import styles from './TargetedAd.module.scss';

const TargetedAd = ({ getTargetedAd, ad, loading, id }: any) => {
  useEffect(() => {
    getTargetedAd(id);
    console.log(loading);
  }, [getTargetedAd]);
  return (
    <>
      {loading ? null : (
        <>
          <article className={styles.sp_ad_container}>
            <div className='ad_top_row'>
              <h2>{ad.title}</h2>
              <span>{ad.category}</span>
            </div>

            <p>{ad.desc}</p>

            <div className='ads_prices'>
              <p>1 day: {ad.price[0]} $</p>
              <p>3 days: {ad.price[0]} $</p>
              <p>7 days: {ad.price[2]} $</p>
            </div>
          </article>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  ad: state.targetedAd.ad,
  loading: state.targetedAd.loading,
});

export default connect(mapStateToProps, { getTargetedAd })(TargetedAd);
