// rce to create this layout
import React from 'react';
// impt to bring PropTypes
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				{/* props are properties that can be passed into a component from outside */}
				<a href="/" style={{ margin: '0px' }}>
					<i className={icon} /> {title}
				</a>
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

// to make a default for the props
// use static instead of the Navbar. when in a class
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};
// it will work if it is not a strung but it will give an error
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
export default Navbar;
