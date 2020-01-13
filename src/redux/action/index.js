const LOGIN = 'LOGIN';
const LOGOUT='LOGOUT';

export const login=(state,action)=>({
    type:action.type
});

export const logout=(state,action)=>({
    type:action.type
});

const initialState = {
    token:null,
    displayName:null,
};

function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token:action.token,
                displayName: action.displayName
            };
        case LOGOUT:
            return {
                ...state,
                token:action.token,
                displayName: action.displayName
            };
        default:
            return state;
    }
};

export default auth;