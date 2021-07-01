// rce to create this layout
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
	// to make a default for the props
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github'
	};
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					{/* props are properties that can be passed into a component from outside */}
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
