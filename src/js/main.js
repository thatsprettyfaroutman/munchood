import React from 'react';

import Header from 'components/header.react';
import Hero from 'components/hero.react';
import TextBlock from 'components/text-block.react';

class App extends React.Component {

	render() {
		return (
			<div className="app">

				<section className="top">
					<Header />
					<Hero />
					<TextBlock row="0" />
				</section>

				<section className="features">
					<div className="grid-row">
						<div className="grid-col grid-col--40">
							<TextBlock row="1" />
						</div>
						<div className="grid-col grid-col--60">
							<Hero />
						</div>
					</div>
					<div className="grid-row">
						<div className="grid-col grid-col--60">
							<Hero />
						</div>
						<div className="grid-col grid-col--40">
							<TextBlock row="1" />
						</div>
					</div>
				</section>

			</div>
		)
	}

}

React.render(<App />, document.body);
