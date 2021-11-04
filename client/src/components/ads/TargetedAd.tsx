import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTargetedAd } from '../../actions/ads';

const TargetedAd = ({ getTargetedAd, ad, id }: any) => {
  //   const { ad } = targetedAd;
  useEffect(() => {
    getTargetedAd(id);
  }, [getTargetedAd]);
  return (
    <>
      <div>{ad.title}</div>
      <h1>{ad.desc}</h1>
    </>
    /*       <article
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
 
        <div className='ads_prices'>
          <p>1 day: {item.price[0]} $</p>
          <p>3 days: {item.price[0]} $</p>
          <p>7 days: {item.price[2]} $</p>
        </div>
      </article> */
  );
};

const mapStateToProps = (state: any) => ({
  ad: state.targetedAd.ad,
});

export default connect(mapStateToProps, { getTargetedAd })(TargetedAd);
