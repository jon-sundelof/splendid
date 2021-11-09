import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTargetedAd } from '../../actions/ads';
import targetedAd from '../../reducers/targetedAd';

import styles from './TargetedAd.module.scss';
import Button from '@mui/material/Button';

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
            <img className={styles.img_targeted_ad} src={ad.pic} />
            <section className={styles.text_content_container}>
              <div className={styles.ad_top_row}>
                <div>
                  <h2>{ad.title}</h2>
                  <span>{ad.price[0]} $/day</span>
                </div>
                <div>
                  <span>{ad.name}</span>
                  <img src={ad.avatar} />
                </div>
              </div>

              <p className={ad.desc_container}>{ad.desc}</p>
              <hr />
              <span className={styles.category}>{ad.category}</span>

              <div className={styles.ad_prices}>
                <span className={styles.prices_header}>Prices</span>
                <div>
                  <span>1 day</span>
                  <span>{ad.price[0]} $</span>
                </div>
                <div>
                  <span>3 day</span>
                  <span>{ad.price[1]} $</span>
                </div>
                <div>
                  <span>7 day</span>
                  <span>{ad.price[2]} $</span>
                </div>
              </div>
              <Button variant='contained'>Rent Me</Button>
            </section>
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
