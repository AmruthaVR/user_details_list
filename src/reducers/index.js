import { combineReducers } from 'redux';
import fetchUserReducer from './fetchUserReducer';


const rootReducer = combineReducers({
    users : fetchUserReducer,
});

export default rootReducer;