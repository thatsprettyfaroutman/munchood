import React      from 'react';
import SheetApi   from 'services/sheet-api';
import classNames from 'classnames';

export default class TextBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title : '',
      upperTitle : '',
      body : ''
    };

    // Get data
    SheetApi.get('text-block').then(data => {
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

    let mainHeading = (
      <h1 className={headingClass}>
        { this.state.upperTitle ? <span className="heading__upper">{ this.state.upperTitle }</span> : '' }
        { this.state.title }
      </h1>
    );

    let secondaryHeading = (
      <h2 className={headingClass}>
        { this.state.upperTitle ? <span className="heading__upper">{ this.state.upperTitle }</span> : '' }
        { this.state.title }
      </h2>
    );

    return (
      <div className={textBlockClass}>
        { this.props.mainHeading ? mainHeading : secondaryHeading }
        <div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
      </div>
    );
  }
}

TextBlock.defaultProps = {
  align : null,
  row : 0,
  addSpace : null,
  mainHeading : false
};
