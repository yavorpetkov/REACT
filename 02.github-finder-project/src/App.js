import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				{/* with set title and icon properties not from the default */}
				{/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
			</div>
		);
	}
}

export default App;
