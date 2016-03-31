import React      from 'react';
import SheetApi   from 'services/sheet-api';
import classNames from 'classnames';
import Person     from 'components/person.react';

export default class People extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			people : [],
		};

		// Get data
		SheetApi.get('people').then(data => {
			let people = [];

			data.forEach(item => {
				people.push(
					<Person
						title={ item.title }
						body={ item.body }
						image={ item.image }
						role={ item.role }
					/>
				);
			});

			this.setState({ people : people });
		});
	}

	render() {
		return (
			<div className="people">
				{ this.state.people }
			</div>
		);
	}
}

People.defaultProps = {

};
