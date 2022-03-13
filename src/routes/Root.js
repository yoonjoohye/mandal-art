import React, { useEffect } from 'react';
import Index from '../pages/index/Index';
import Login from '../pages/auth/Login';
import Header from '../components/base/Header';
import Guide from '../pages/guide/Guide';
import NotFound from '../pages/NotFound';
import Write from '../pages/write/Write';
import Mypage from '../pages/mypage/Mypage';
import ServiceUseRule from '../pages/auth/ServiceUseRule';
import PrivacyRule from '../pages/auth/PrivacyRule';
import AuthRoute from './AuthRoute';
import { useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../stores/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAPI } from '../utils/api';

const Root = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    if (sessionStorage.getItem('token')) {
      let userResponse = await getAPI(`/user`, {
        headers: {
          AUTHORIZATION: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      if (userResponse) {
        console.log(userResponse);
        sessionStorage.setItem(
          'user',
          JSON.stringify({ uid: userResponse.data.uid })
        );
        dispatch(
          loginSuccess({
            name: userResponse.data.name,
            email: userResponse.data.email,
            uid: userResponse.data.uid,
            photoURL: userResponse.data.profileImg,
          })
        );
      }
    } else {
      sessionStorage.removeItem('user');
      dispatch(logoutSuccess());
    }
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/service-rule" element={<ServiceUseRule />} />
        <Route path="/privacy-rule" element={<PrivacyRule />} />
        <Route exact path="/write" element={<Write />} />
        <Route
          exact
          path="/detail/:id"
          element={<AuthRoute element={<Write />} />}
        />
        <Route
          exact
          path="/mypage"
          element={<AuthRoute element={<Mypage />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
