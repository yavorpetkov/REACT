import React, { Fragment, Component } from 'react';
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import axios from 'axios';
import './App.css';

// to store local variables in the local environment use .env.local

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	};

	// Search GitHub Users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	// Clear Users from state
	clearUsers = () => this.setState({ users: [], loading: false });

	// Set Alert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 4000);
	};

	render() {
		const { users, loading, alert } = this.state;
		const { searchUsers, clearUsers, setAlert } = this;

		return (
			<Router>
				<div className="App">
					{/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
					<Navbar />
					<div className="container">
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={searchUsers}
											clearUsers={clearUsers}
											showClear={this.state.users.length > 0 ? true : false}
											setAlert={setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
