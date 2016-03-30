import React     from 'react';

import Header    from 'components/header.react';
import HeroImage from 'components/hero-image.react';
import TextBlock from 'components/text-block.react';
import Image     from 'components/image.react';

class App extends React.Component {

	render() {
		return (
			<div className="app">

				<Header />

				<section className="hero">
					<HeroImage />
					<div className="grid-row">
						<div className="grid-col grid-col--40 grid-col--tablet--60 grid-col--center">
							<TextBlock row="0" align="center" />
						</div>
					</div>
				</section>

				<section className="features">
					<div className="grid-row features__item">
						<div className="grid-col grid-col--40">
							<TextBlock row="1" addSpace="after" />
						</div>
						<div className="grid-col grid-col--60">
							<Image row="0" />
						</div>
					</div>
					<div className="grid-row features__item">
						<div className="grid-col grid-col--60">
							<Image row="1" />
						</div>
						<div className="grid-col grid-col--40">
							<TextBlock row="2" addSpace="before" />
						</div>
					</div>
				</section>

			</div>
		)
	}

}

React.render(<App />, document.body);
