import React from 'react';
// impt to bring PropTypes
import PropTypes from 'prop-types';
import './UserItem.css';

// in fuctions we dont need this.props we just pass props in the function

// here we destructured the props in the function
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	// const { login, avatar_url, html_url } = props.user;

	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img imgW" />
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
