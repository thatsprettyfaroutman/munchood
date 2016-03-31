import React    from 'react';
import SvgImage from 'components/svg-image.react';
import SheetApi from 'services/sheet-api';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

		this.state = {
			icons : [],
		};

		// Get data
		SheetApi.get('footer-icons').then(data => {
			let icons = [];

			data.forEach(item => {
				let iconClass = 'fa fa-lg ' + item.icon;
				icons.push(
					<a
						href={ item.href }
						rel="nofollow"
						target="_blank"
					>
						<span className={iconClass}></span>
					</a>
				);
			});

			this.setState({ icons : icons });
		});

  }

  render() {
    return (
      <footer className="footer">

				{ this.state.icons }

      </footer>
    );
  }
}
