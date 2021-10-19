import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initalState: any = [];

export default function (state = initalState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return state.findIndex((state: any) => state.msg === payload.msg)
        ? [...state, payload]
        : state;
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== payload);
    default:
      return state;
  }
}
