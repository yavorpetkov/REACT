// eslint-disable-next-line no-unused-vars
import React, { Fragment, Component } from 'react';
import './App.css';

// with a function
// function App() {
// 	return (
// 		<div className="App">
// 			<h1>Hello From REACT</h1>
// 		</div>
// 	);
// }

// with a class
class App extends Component {
	// to make foo a method to be used with this.
	// foo = () => 'Bars';

	render() {
		// here foo is a functions that can be called upon
		// const foo = () => 'Bar';
		// const loading = false;
		// const name = 'John Doe';
		// const showName = true;

		// if (loading) {
		// 	return <h4>Loading...</h4>;
		// }

		return (
			<div className="App">
				<h1>Hello From REACT</h1>

				{/* {loading ? <h4>Loading...</h4> : <h2>Hello {showName && name}</h2>}
				<h3>Hello {foo()}</h3>
				<h3>Hello {this.foo()}</h3> */}
			</div>

			// can be done with React.Fragment so element are not put in a div
			// <Fragment>
			// 	<h2>Hello From REACT</h2>
			// </Fragment>
		);
	}
}

// without jsx and only js
// class App extends Component {
// 	render() {
// creating elements with REACT
// 		return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello From React'));
// 	}
// }
export default App;
