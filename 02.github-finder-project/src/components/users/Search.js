import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: ''
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
	onChange = (e) => {
		// use brackets and e.target.name to shorten it if there is more than 1 input
		this.setState({ [e.target.name]: e.target.value });
		console.log(e);
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
