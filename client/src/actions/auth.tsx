import axios from 'axios';
import { setAlert } from '../actions/alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register =
  ({ firstName, lastName, email, password }: any) =>
  async (dispatch: any) => {
    const config: any = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    const body: string = JSON.stringify({
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
