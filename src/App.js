import React, { Component } from 'react';
import Header from './header.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="intro-text">
					<div className="intro-one">Welcome To Our Studio!</div>
					<div className="intro-two">IT IS NICE TO MEET YOU</div>
					<div className="intro-button">TELL ME MORE</div>
				</div>
			</div>
		);
	}
}

export default App;
