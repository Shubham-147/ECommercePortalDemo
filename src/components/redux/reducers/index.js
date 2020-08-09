import { combineReducers } from 'redux';
import CartReducer from './Cart_Reducer';

export default combineReducers({
  cart : CartReducer
});