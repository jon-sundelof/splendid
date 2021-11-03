import axios from 'axios';
import { setAlert } from './alert';
import { GET_ADS, AD_ERROR } from './types';

export const getAds = () => async (dispatch: any) => {
  console.log('asd');
  try {
    const res = await axios.get('/api/ads');

    dispatch({
      type: GET_ADS,
      payload: res.data,
    });
  } catch (err) {}
};

/* const submitAd = async () => {
  const {
    category,
    title,
    desc,
    dayPrice,
    threeDayPrice,
    weekPrice,
    productValue,
    pickup,
    addresses,
    delivery,
    terms,
  } = values;
  const config: any = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body: any = JSON.stringify({
    category,
    title,
    desc,
    price: [dayPrice, threeDayPrice, weekPrice],
    productValue,
    pickup,
    addresses,
    delivery,
    terms,
  });
  console.log(body);

  try {
    const res = await axios.post('/api/ads', body, config);
    console.log(res);
  } catch (err: any) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'error')));
    }
  }
};
 */
