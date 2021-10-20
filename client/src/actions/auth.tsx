import axios from 'axios';
import { Dispatch } from 'redux';
import { setAlert } from '../actions/alert';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from './types';

// Load User
export const loadUser = () => async (dispatch: Dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ firstName, lastName, email, password }: any) =>
  async (dispatch: any) => {
    const config: any = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body: any = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    });

    try {
      const res = await axios.post('/api/users', body, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err: any) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, 'error')));
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
