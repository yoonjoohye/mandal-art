//
export const AUTH = 'AUTH';

//
export const Auth=(state,action)=>({
    type:action.type,
    token:action.token,
    displayName: action.displayName
});

const initialState = {
    token:null,
    displayName:null,
};

//리듀서
export default(state = initialState, action)=> {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                token:action.token,
                displayName: action.displayName
            };
        default:
            return state;
    }
};
