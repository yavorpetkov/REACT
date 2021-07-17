/* eslint-disable no-unused-vars */
import React, { useReducer, userReduser } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADEDD,
	AUTH_ERROROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};

	const [ state, dispatch ] = useReducer(authReducer, initialState);

	// LOAD USER

	// REGISTER USER

	// LOGIN USER

	// LOGOUT

	// CLEAR ERRORS

	const { token, isAuthenticated, loading, user, error } = state;

	return (
		<AuthContext.Provider
			value={{
				token: token,
				isAuthenticated: isAuthenticated,
				loading: loading,
				user: user,
				error: error
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
