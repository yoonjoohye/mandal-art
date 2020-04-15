import { combineReducers } from 'redux';

import modal from './modal';
import login from './login';

const rootReducer=combineReducers({
    modal,
    login
});
export default rootReducer;
