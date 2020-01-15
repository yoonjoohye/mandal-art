import {Map} from 'immutable';

//액션 이
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//
export const login ={
    type: LOGIN
};
export const logout ={
    type: LOGOUT
};

export const initialState = {
    user: null
};

//리듀서
const handleActions = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.user,
            };
            break;
        case LOGOUT:
            return {
                user: action.user,
            };
            break;
        default:
            return state;
    }
};

export default handleActions;