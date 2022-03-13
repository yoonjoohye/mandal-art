import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ user, element }) => {
  return user ? element : <Navigate replace to="/login" />;
};

export default connect((state) => ({
  user: state.auth.user,
}))(AuthRoute);
