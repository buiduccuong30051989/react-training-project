import { combineReducers } from 'redux';
import flagReducer from 'components/flag/reducer/flagReducer';
import homeReducer from 'components/home/reducer/homeReducer';

export default combineReducers({
  flagReducer,
  homeReducer,
});
