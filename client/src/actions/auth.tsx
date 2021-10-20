import axios from 'axios';
import { Dispatch } from 'redux';
import { setAlert } from '../actions/alert';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
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

// Login User
export const login =
  ({ email, password }: any) =>
  async (dispatch: any) => {
    const config: any = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body: any = JSON.stringify({
      email,
      password,
    });

    console.log(body);

    try {
      const res = await axios.post('/api/auth', body, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      dispatch(loadUser());
    } catch (err: any) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, 'error')));
      }

      dispatch({
        type: LOGIN_FAIL,
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

      dispatch(loadUser());
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
