import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MANDALART_API,
  headers: {
    AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
  },
  withCredentials: true,
});

export const getAPI = async (url, params) => {
  try {
    const response = await instance.get(url, params);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      let authResponse = await instance.get('/auth/refresh');
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        await getAPI(url, params);
      }
    }
    return error;
  }
};

export const postAPI = async (url, data) => {
  try {
    const response = await instance.post(url, data);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      let authResponse = await instance.get('/auth/refresh');
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        await postAPI(url, data);
      }
    }
    return error;
  }
};

export const patchAPI = async (url, data) => {
  try {
    const response = await instance.patch(url, data);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      let authResponse = await instance.get('/auth/refresh');
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        await patchAPI(url, data);
      }
    }
    return error;
  }
};

export const deleteAPI = async (url, data) => {
  try {
    const response = await instance.delete(url, data);
    return response;
  } catch (error) {
    if (error.response.status === 403) {
      let authResponse = await instance.get('/auth/refresh');
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        await deleteAPI(url, data);
      }
    }
    return error;
  }
};
