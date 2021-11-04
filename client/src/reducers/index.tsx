import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import ads from './ads';
import targetedAd from './targetedAd';

export default combineReducers({ alert, auth, ads, targetedAd });
