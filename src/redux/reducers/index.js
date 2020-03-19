import '../actions/index';

const initialState = {
    user: null
};

//리듀서
const handleActions = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                user: action.user,
            };
        case 'logout':
            return {
                user: action.user,
            };
        default:
            return state;
    }
};

export default handleActions;