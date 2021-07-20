/* eslint-disable no-unused-vars */
import React, { useReducer, userReduser } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRNET,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [],
		current: null,
		filtered: null,
		error: null
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);
	// to acess a function it need to be added to the ContactContext Provider

	// Add Contact
	const addContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			// putting the contact into the database
			const res = await axios.post('/api/contacts', contact, config);

			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.respose.msg
			});
		}
	};

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	// Set Currnet Contact
	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	// Clear Currnet Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRNET });
	};

	//  Update Contact
	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	// Filter Contacts
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	const { contacts, current, filtered, error } = state;

	return (
		<ContactContext.Provider
			value={{
				contacts: contacts,
				current: current,
				filtered: filtered,
				error: error,

				addContact,
				updateContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				filterContacts,
				clearFilter
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
