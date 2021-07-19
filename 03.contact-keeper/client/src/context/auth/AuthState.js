/* eslint-disable no-unused-vars */
import React, { useReducer, userReduser } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
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
	const loadUser = () => {
		console.log('loaduser');
	};

	// REGISTER USER
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post('/api/users', formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg
			});
		}
	};

	// LOGIN USER
	const login = () => {
		console.log('loginUser');
	};

	// LOGOUT
	const logout = () => {
		console.log('logout');
	};

	// CLEAR ERRORS
	const clearErrors = () => {
		console.log('clearErrors');
	};

	const { token, isAuthenticated, loading, user, error } = state;

	return (
		<AuthContext.Provider
			value={{
				token: token,
				isAuthenticated: isAuthenticated,
				loading: loading,
				user: user,
				error: error,
				register,
				loadUser,
				login,
				logout,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
