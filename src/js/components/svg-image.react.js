import React from 'react';

export default class SvgImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let src = this._svgIsSupported() ? this.props.svg : this.props.bitmap;
    return (
      <img className={ this.props.className } src={ src } alt={ this.props.alt } />
    )
  }

  _svgIsSupported() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")
  }
}

SvgImage.defaultProps = {
  bitmap : null,
  svg : null,
  alt : '',
  className : ''
};
