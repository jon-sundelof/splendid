import { GET_TARGETED_AD } from '../actions/types';

const initialState = {
  ad: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case GET_TARGETED_AD:
      return { ...state, ad: payload, loading: false };
    default:
      return state;
  }
}
