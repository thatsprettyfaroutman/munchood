import React from 'react';
import SheetApi from 'services/sheet-api';
import SvgImage from 'components/svg-image.react';

export default class HeroImage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			image : null,
			title : null
		};

		// Get data
		SheetApi.get('hero-image').then(data => {
			this.setState(data[0]);
		});
	}

	render() {
		return (
			<div className="hero-image" style={{
				backgroundImage : ( this.state.image ? 'url(' + this.state.image + ')' : '' )
			}}>
				<h1>{ this.state.title }</h1>
				<SvgImage className="hero-image__arrow" bitmap="images/hero__arrow.png" svg="images/hero__arrow.svg" alt="See more below" />
			</div>
		);
	}
}

HeroImage.defaultProps = {};
