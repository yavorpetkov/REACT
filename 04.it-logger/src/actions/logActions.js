import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	SEARCH_LOGS
} from './types';

// GET LOGS FROM SERVER
// export const getLogs = () => {
// 	return async (dispatch) => {
// 		setLoading();

// 		const res = await fetch('./logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data
// 		});
// 	};
// };
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// ADD NEW LOG
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// DELETE LOG FROM SERVER
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, { method: 'DELETE' });

		dispatch({
			type: DELETE_LOG,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// UPDATE LOG ON SERVER
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// SEARCH SERVER LOGS
export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		});
	}
};

// SET CURRNET LOG
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

// CLEAR CURRNET LOG
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

// SET LOADING TO TRUE
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
