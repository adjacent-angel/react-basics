//import reducers
import { combineReducers } from 'redux';
import { addSubReducer } from './addSub/addSubReducer';
import { elementReducer } from './element/elementReducer';

export const rootReducer = combineReducers({
    addSubReducer,
    elementReducer
});
