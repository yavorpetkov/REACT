import React from 'react';
import Navbar from './items/Navbar';

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<Navbar />
				<div className="header-text">
					<div>
						<h2 className="text-slogan">
							It's that<br />
							simple.
						</h2>
						<h3>FEATURING OUR NEW SPRING SPECIALS!</h3>
						<a href="#!">Details</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
