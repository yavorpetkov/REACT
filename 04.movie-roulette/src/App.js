import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Navbar />
		</div>
	);
};

export default App;
