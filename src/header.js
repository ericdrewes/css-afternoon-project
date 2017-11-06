import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav>
					<ul>
						<li>SERVICES</li>
						<li>PORTFOLIO</li>
						<li>ABOUT</li>
						<li>TEAM</li>
						<li>CONTACT</li>
					</ul>
				</nav>
			</div>
		);
	}
}
