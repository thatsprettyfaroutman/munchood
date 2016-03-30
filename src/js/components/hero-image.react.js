import React from 'react';
import SheetApi from 'services/sheet-api';

export default class HeroImage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			image : null,
		};

		// Get data
		SheetApi.get('hero-image').then(data => {
			this.setState(data[0]);
		});
	}

	render() {
		return (
			<div className="hero-image">
				<div className="hero-image__video">
					<img src={ this.state.image } />
				</div>
			</div>
		);
	}
}
