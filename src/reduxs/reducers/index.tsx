import { combineReducers } from 'redux';
import { test } from './demo';


const allReducer = {
    demo:test
}

const rootReducer= combineReducers({
    ...allReducer
});

export default rootReducer;