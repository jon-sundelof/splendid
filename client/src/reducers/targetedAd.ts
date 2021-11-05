import { GET_TARGETED_AD, SAVE_AD_DATA } from '../actions/types';

const initialState = {
  ad: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case GET_TARGETED_AD:
    case SAVE_AD_DATA:
      return { ...state, ad: payload, loading: false };
    default:
      return state;
  }
}
