import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import ads from './ads';

export default combineReducers({ alert, auth, ads });
