import React from 'react';
import Hero from 'components/hero.react';

class App extends React.Component {

	render() {
		return (
			<div>
				<Hero />
			</div>
		)
	}

}

React.render(<App />, document.body);
