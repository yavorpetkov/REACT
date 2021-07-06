import React, { Fragment, useState } from 'react';
// npm i react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

// to store local variables in the local environment use .env.local

const App = () => {
	// first we declare the variable and then the method we use to change it
	// const [ users, setUsers ] = useState([]);
	// const [ user, setUser ] = useState({});
	// const [ repos, setRepos ] = useState([]);
	// const [ loading, setLoading ] = useState(false);
	const [ alert, setAlert ] = useState(null);

	// SET ALERT
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 4000);
	};

	return (
		<GithubState>
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
								render={() => (
									<Fragment>
										<Search setAlert={showAlert} />
										<Users />
									</Fragment>
								)}
							/>
							{/* a path to a difrent page */}
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
