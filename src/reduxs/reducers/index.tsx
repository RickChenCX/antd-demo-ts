import { combineReducers } from 'redux';
import { test } from './demo';


const rootReducer= combineReducers({
    demo:test
});

export default rootReducer;