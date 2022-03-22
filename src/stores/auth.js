import { getAPI } from '../utils/api';

//액션 이름
const LOGIN = 'auth/LOGIN';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';

//액션 생성 함수
export const login = () => ({
  type: LOGIN,
});
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user: data,
  },
});
export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  err,
});
export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: {
    user: null,
  },
});
export const logoutFailure = (err) => ({
  type: LOGOUT_FAILURE,
  err,
});

//thunk 생성 함수
export const loginAsync = (token) => async (dispatch) => {
  dispatch(login());

  try {
    let googleResponse = await getAPI(`/auth/google`, {
      params: {
        googleAccessToken: token,
      },
    });

    if (googleResponse) {
      sessionStorage.setItem('token', googleResponse.data.accessToken);
      window.location.href = '/';
    }
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
export const logoutAsync = () => async (dispatch) => {
  dispatch(logout());
  sessionStorage.removeItem('token');
  dispatch(logoutSuccess());
  window.location.href = '/login';
};

const initialState = {
  loading: {
    login: false,
    logout: false,
  },
  user: sessionStorage.getItem('token')
    ? sessionStorage.getItem('token')
    : null,
};

//리듀서
const HandleAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: {
          ...state.loading,
          login: true,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          login: false,
        },
        user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          login: false,
        },
      };
    case LOGOUT:
      return {
        ...state,
        loading: {
          ...state.loading,
          logout: true,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          logout: false,
        },
        user: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          logout: false,
        },
      };
    default:
      return state;
  }
};

export default HandleAuth;
