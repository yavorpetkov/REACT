import { combineReducers } from 'redux';
import LogReducer from './LogReducer';

export default combineReducers({
	// this is what we call the state for the log part
	log: LogReducer
});
