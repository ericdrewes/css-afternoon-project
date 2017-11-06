import React, { Component } from 'react';
import Header from './header.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<img src="https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg" />
			</div>
		);
	}
}

export default App;
