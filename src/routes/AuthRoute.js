import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ user, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Component {...props}></Component> : <Redirect to="/login" />
			}
		/>
	);
};

export default connect((state) => ({
	user: state.auth.user
}))(AuthRoute);
