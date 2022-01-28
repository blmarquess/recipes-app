import { combineReducers } from 'redux';
import login from './login';
import display from './display';

const rootReducer = combineReducers({ login, display });

export default rootReducer;
