import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg: any, alertType: any) => (dispatch: any) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });
};
