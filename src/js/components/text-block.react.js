import React from 'react';
import SheetApi from 'services/sheet-api';

export default class TextBlock extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title : '',
			body : ''
		};

		// Get data
		SheetApi.get('text-block').then(data => {
			let row = 0;

			if ( this.props.row ) {
				row = this.props.row;
			}

			this.setState(data[row]);
		});
	}

	render() {
		return (
			<div className="text-block">
				<div className="grid-row">
					<div className="grid-col grid-col--50 grid-col--tablet--60 grid-col--center">
						<h1 className="heading heading--center">{ this.state.title }</h1>
						<div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
					</div>
				</div>
			</div>
		);
	}
}
