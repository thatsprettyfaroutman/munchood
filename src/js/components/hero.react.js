import React from 'react';
import SheetApi from 'services/sheet-api';

export default class Hero extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			image : null,
		};

		// Get data
		SheetApi.get('hero').then(data => {
			this.setState(data[0]);
		});
	}

	render() {
		return (
			<div className="hero">
				<div className="grid-row grid-row--no-padding">
					<div className="grid-col grid-col--100">
						<div className="hero__video">
							<img src={ this.state.image } />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
