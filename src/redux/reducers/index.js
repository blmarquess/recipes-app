import { combineReducers } from 'redux';
import login from './login';
import searchdata from './searchdata';

const rootReducer = combineReducers({ login, searchdata });

export default rootReducer;
