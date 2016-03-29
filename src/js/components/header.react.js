import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<img src="images/logo.png" alt="Online Marketplace For Homemade Food" />
			</header>
		);
	}
}
