import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false
	};

	// life cycle method
	async componentDidMount() {
		// state can't be changed directly by this.state.loading = true
		// with class based components we have to use setState
		this.setState({ loading: true });
		const res = await axios.get('https://api.github.com/users');
		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<div className="App">
				{/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
				<Navbar />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
