import { combineReducers } from 'redux';
import { uiReducer } from './UIReducer';


const reducers = combineReducers({
	ui: uiReducer
});

export default reducers;