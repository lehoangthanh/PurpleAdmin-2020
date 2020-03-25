import { combineReducers } from 'redux';
import dashboard from './dashboard';
import loadingBar from './loadingBar';

export default combineReducers({
  dashboardReducer: dashboard,
  loadingBarReducer: loadingBar
})
