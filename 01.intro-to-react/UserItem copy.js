import React, { Component } from 'react';

export class UserItemNot extends Component {
	// no need for this with props
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		id: 'id',
	// 		login: 'mojombo',
	// 		avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
	// 		html_url: 'https://github.com/mojombo'
	// 	};
	// }
	render() {
		// deconstruct so we dont use this.state so much
		const { login, avatar_url, html_url } = this.props.user;
		return (
			<div className="card text-center">
				<img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
				<h3>{login}</h3>
				<div>
					<a href={html_url} className="btn btn-dark btn-sm my-1">
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItemNot;
