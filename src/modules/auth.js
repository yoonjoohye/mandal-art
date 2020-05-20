import firestore from '../firebaseApp.js';
import * as firebase from "firebase";


//액션 이름
const LOGIN = 'auth/LOGIN';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';


//액션 생성 함수
export const login = () => ({
    type: LOGIN
});
export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: {
        user: data
    }
});
export const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    err
});
export const logout = () => ({
    type: LOGOUT
});

export const logoutSuccess = (data) => ({
    type: LOGOUT_SUCCESS,
    payload: {
        user: data
    }
});
export const logoutFailure = (err) => ({
    type: LOGOUT_FAILURE,
    err
});

//thunk 생성 함수
export const loginAsync = (type) => async dispatch => {
    dispatch(login());
    let provider;
    if (type === 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
    } else if (type === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
    }
    firebase.auth().signInWithPopup(provider).then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        dispatch(loginSuccess(res.user));
    }).then(() => {
        window.location.href = '/';
    }).catch((err) => {
        dispatch(loginFailure(err));
        throw err;
    })

}
export const logoutAsync = () => async dispatch => {
    dispatch(logout());
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('user');
        dispatch(logoutSuccess(null));
    }).then(() => {
        window.location.href = '/login';
    }).catch((err) => {
        dispatch(logoutFailure(err));
        throw err;
    })
}

const initialState = {
    loading: {
        login: false,
        logout: false
    },
    user: JSON.parse(localStorage.getItem('user'))
};

//리듀서
const HandleAuth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    login: true
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    login: false
                },
                user: action.payload.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    login: false
                }
            };
        case LOGOUT:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    logout: true
                }
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    logout: false
                },
                user: action.payload.user
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    logout: false
                }
            };
        default:
            return state;
    }
}

export default HandleAuth;