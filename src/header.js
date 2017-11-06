import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
	render() {
		return (
			<nav className="header">
				<div className="header-left">Start Bootstrap</div>
				<div className="header-right">
					<ul>
						<div className="navbar">SERVICES</div>
						<div className="navbar">PORTFOLIO</div>
						<div className="navbar">ABOUT</div>
						<div className="navbar">TEAM</div>
						<div className="navbar">CONTACT</div>
					</ul>
				</div>
				<img className="hide" src="https://d30y9cdsu7xlg0.cloudfront.net/png/880223-200.png" />
			</nav>
		);
	}
}
