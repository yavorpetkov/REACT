/* eslint-disable no-unused-vars */
import React, { useReducer, userReduser } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRNET,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			// hardcoded contacts
			{
				id: 1,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				phone: '111-111-1111',
				type: 'personal'
			},
			{
				id: 2,
				name: 'Sara Watson',
				email: 'sara@gmail.com',
				phone: '222-222-2222',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Harry White',
				email: 'harry@gmail.com',
				phone: '333-333-3333',
				type: 'professional'
			}
		]
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);
	// to acess a function it need to be added to the ContactContext Provider

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact

	// Set Currnet Contact

	// Clear Currnet Contact

	//  Update Contact

	// Filter Contacts

	// Clear Filter

	const { contacts } = state;

	return (
		<ContactContext.Provider
			value={{
				contacts: contacts,
				addContact
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
