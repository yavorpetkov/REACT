import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: ''
	};

	static propTypes = {
		// searchUsers must be a function
		searchUsers: PropTypes.func.isRequired
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};
	onChange = (e) => {
		// use brackets and e.target.name to shorten it if there is more than 1 input
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input type="submit" value="Search" className="btn btn-dark btn-block" />
				</form>
			</div>
		);
	}
}

export default Search;
