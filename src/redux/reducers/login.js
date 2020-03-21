//액션 이름
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//액션 생성 함수
export const login = () => ({
    type: LOGIN
});
export const logout = () => ({
    type: LOGOUT
});

const initialState = {
    user: null
};

//리듀서
const HandleAuth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.user,
            };
        case LOGOUT:
            return {
                user: action.user,
            };
        default:
            return state;
    }
};

export default HandleAuth;