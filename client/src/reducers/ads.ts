import { AD_ERROR, GET_ADS } from '../actions/types';

const initialState = {
  ads: [],
  ad: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADS:
      return {
        ...state,
        ads: payload,
        loading: false,
      };
    case AD_ERROR:
      return {
        ...state,
        ads: payload,
        loading: false,
      };
    default:
      return state;
  }
}
