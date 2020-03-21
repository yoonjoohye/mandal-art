import { combineReducers } from 'redux';

import modal from './modal';
import login from './login';

export default combineReducers({
    modal,
    login
});