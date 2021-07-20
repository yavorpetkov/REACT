import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current, clearCurrent, updateContact } = contactContext;

	const [ contact, setContact ] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal'
	});

	const setContactBack = () => {
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		});
	};

	// mymics the effect of componentDidMount
	useEffect(
		() => {
			if (current !== null) {
				setContact(current);
			} else {
				setContactBack();
			}
		},
		// only happens when these to are changed
		[ contactContext, current ]
	);

	const { name, email, phone, type } = contact;

	// FUNCTIONS

	// e.target.name will look at the name and the value and if they match it will set it
	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null && name !== '' && email !== '' && phone !== '') {
			addContact(contact);
			setContactBack();
		} else if (current !== null) {
			updateContact(contact);
			setContactBack();
		}

		// returns everything back to normal
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
			<input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
			<input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
			<input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
			<h5>Contact Type</h5>
			<input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} />{' '}
			Personal{' '}
			<input
				type="radio"
				name="type"
				value="professional"
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			Professional
			<div>
				<input
					type="submit"
					value={current ? 'Update Contact' : 'Add Contact'}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
