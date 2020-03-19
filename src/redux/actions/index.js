import {Map} from 'immutable';

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


