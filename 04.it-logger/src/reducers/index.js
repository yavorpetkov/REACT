import { combineReducers } from 'redux';
import LogReducer from './LogReducer';
import TechReducer from './TechReducer';

export default combineReducers({
	// this is what we call the state for the log part
	log: LogReducer,
	tech: TechReducer
});
