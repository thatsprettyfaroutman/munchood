import React from 'react';

export default class Person extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="person">
				<div className="grid-row grid-row--no-padding">

					<div className="grid-col grid-col--50">
						<div className="person__text">
							<h3>{ this.props.title }</h3>
							<h4>{ this.props.role }</h4>
							<div className="body" dangerouslySetInnerHTML={ { __html : this.props.body} }></div>
						</div>
					</div>

					<div className="grid-col grid-col--50">
						<div className="person__picture">
							<img src={ this.props.image } alt={ this.props.title } />
						</div>
					</div>

				</div>
			</div>
		);
	}
}

Person.defaultProps = {
	title : null,
	body : null,
	role : null,
	image : null,
};
