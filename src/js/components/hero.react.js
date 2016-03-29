import React from 'react';
import SheetApi from 'services/sheet-api';

export default class Hero extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			image : null,
			title : '',
			body : ''
		};

		// Get data
		SheetApi.get('hero').then(data => {
			this.setState(data[0]);
		});
	}

	render() {
		return (
			<section className="hero">
				<div className="grid-row grid-row--no-padding">
					<div className="grid-col grid-col--100">
						<div className="hero__video">
							<img src={ this.state.image } />
						</div>
					</div>
				</div>
				<div className="hero__text">
					<div className="grid-row">
						<div className="grid-col grid-col--50 grid-col--tablet--60 grid-col--center">
							<h1 className="heading heading--center">{ this.state.title }</h1>
							<div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
