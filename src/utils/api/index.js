import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_MANDALART_API,
});

export const getAPI = async (url, params) => {
  try {
    let response = instance.get(url, params);

    if (response.status === 401) {
      let authResponse = instance.get('/auth/refresh', {
        headers: {
          AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        response = await getAPI(url, params);
      }
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const postAPI = async (url, data) => {
  try {
    let response = instance.post(url, {
      data: { ...data },
      headers: {
        token: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });
    if (response.status === 401) {
      let authResponse = instance.get('/auth/refresh', {
        headers: {
          AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        response = await postAPI(url, data);
      }
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const patchAPI = async (url, data) => {
  try {
    let response = instance.patch(url, {
      data: { ...data },
      headers: {
        token: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });
    if (response.status === 401) {
      let authResponse = instance.get('/auth/refresh', {
        headers: {
          AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        response = await patchAPI(url, data);
      }
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteAPI = async (url, data) => {
  try {
    let response = instance.delete(url, {
      data: { ...data },
      headers: {
        token: `Bearer ${sessionStorage.getItem('token')}`,
      },
    });
    if (response.status === 401) {
      let authResponse = instance.get('/auth/refresh', {
        headers: {
          AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (authResponse) {
        sessionStorage.setItem('token', authResponse.data.accessToken);
        response = await deleteAPI(url, data);
      }
    }
    return response;
  } catch (error) {
    return error;
  }
};
