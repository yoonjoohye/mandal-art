// 액션 이름
const SAVE = 'mandal/SAVE';
const SAVE_FAILURE = 'mandal/SAVE_FAILURE';
const SAVE_SUCCESS = 'mandal/SAVE_SUCCESS';

const EDIT = 'mandal/EDIT';
const EDIT_FAILURE = 'mandal/EDIT_FAILURE';
const EDIT_SUCCESS = 'mandal/EDIT_SUCCESS';

const DEL = 'mandal/DEL';
const DEL_FAILURE = 'mandal/DEL_FAILURE';
const DEL_SUCCESS = 'mandal/DEL_SUCCESS';

// 액션 타입
export const save = () => ({
  type: SAVE
});

export const saveFailure = (err) => ({
  type: SAVE_FAILURE,
  err
});

export const saveSuccess = (title, data, date) => ({
  type: SAVE_SUCCESS,
  payload: {
    title,
    data,
    date
  }
});

export const edit = () => ({
  type: EDIT
});
export const editFailure = (err) => ({
  type: EDIT_FAILURE,
  err
});
export const editSuccess = (title, data, date) => ({
  type: EDIT_SUCCESS,
  payload: {
    title,
    data,
    date
  }
});

export const del = () => ({
  type: DEL
});
export const delFailure = (err) => ({
  type: DEL_FAILURE,
  err
});
export const delSuccess = (title, data, date) => ({
  type: DEL_SUCCESS,
  payload: {
    title,
    data,
    date
  }
});

// 리덕스 thunk 함수
export const saveAsync = (title, data, date) => async (dispatch) => {
  dispatch(save());
  try {
    dispatch(saveSuccess(title, data, date));
  } catch (err) {
    dispatch(saveFailure(err));
    throw err;
  }
};

const initialState = {
  loading: {
    save: false,
    edit: false,
    delete: false
  },
  mandal: {
    title: '',
    data: '',
    date: ''
  }
};

// 리듀서
const HandleMandal = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        loading: {
          ...state.loading,
          save: true
        }
      };
    case SAVE_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          save: false
        }
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          save: false
        },
        mandal: {
          title: action.payload.title,
          data: action.payload.data,
          date: action.payload.date
        }
      };
  }
};

export default HandleMandal;
