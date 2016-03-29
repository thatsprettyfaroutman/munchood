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
				<div className="hero__video">
					<img src={ this.state.image } />
				</div>
				<div className="hero__text">
					<h1>{ this.state.title }</h1>
					<div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
				</div>
			</section>
		);
	}
}
