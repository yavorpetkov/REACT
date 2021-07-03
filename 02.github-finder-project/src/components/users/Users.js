import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// impt to bring PropTypes
import PropTypes from 'prop-types';
import './Users.css';

const Users = (props) => {
	if (props.loading) {
		return <Spinner />;
	} else {
		return (
			<div className="userStyle">
				{props.users.map((user) => (
					<UserItem key={user.id} user={user} />
					// maps all the users from the array from App
				))}
			</div>
		);
	}
};

Users.propTypes = {
	// no need to use props. here
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Users;
