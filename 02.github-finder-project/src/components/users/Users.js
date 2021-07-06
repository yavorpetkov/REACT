import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
// impt to bring PropTypes
import './Users.css';

const Users = () => {
	// now all of the GithubContext.Provider value is useable here from GithubState.js
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="userStyle">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
					// maps all the users from the array from App
				))}
			</div>
		);
	}
};

export default Users;
