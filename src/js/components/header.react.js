import React    from 'react';
import SvgImage from 'components/svg-image.react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<SvgImage bitmap="images/logo.png" svg="images/logo.svg" alt="Munchood" />
			</header>
		);
	}
}
