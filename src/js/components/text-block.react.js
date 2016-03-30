import React from 'react';
import SheetApi from 'services/sheet-api';
import classNames from 'classnames';

export default class TextBlock extends React.Component {

	constructor(props) {
		super(props);

		// console.log(classNames);

		this.state = {
			title : '',
			'upper-title' : '',
			body : ''
		};

		// Get data
		SheetApi.get('text-block').then(data => {
			console.log(data);
			if ( this.props.row > -1 && this.props.row < data.length ) {
				this.setState(data[this.props.row]);
			}
		});
	}

	render() {
		let textBlockClass = classNames({
			'text-block' : true,
			'text-block--center' : this.props.align === 'center',
			'text-block--space-after' : this.props.addSpace === 'after',
			'text-block--space-before' : this.props.addSpace === 'before',
		});

		let headingClass = classNames({
			'heading' : true,
			'heading--center' : this.props.align == 'center',
		});

		return (
			<div className={textBlockClass}>
				<h1 className={headingClass}>
					{ this.state.title }
				</h1>
				<div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
			</div>
		);
	}
}

TextBlock.defaultProps = {
	align : null,
	row : 0,
	addSpace : null
};
