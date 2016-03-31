import React    from 'react';
import SheetApi from 'services/sheet-api';

export default class Image extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title : '',
      image : null,
      description : ''
    };

    // Get data
    SheetApi.get('image').then(data => {
      if ( this.props.row > -1 && this.props.row < data.length ) {
        this.setState(data[this.props.row]);
      }
    });
  }

  render() {
    return (
      <img src={ this.state.image } alt={ this.state.description } />
    );
    // return (
    //   <div className="text-block">
    //     <h1 className="heading heading--center">{ this.state.title }</h1>
    //     <div className="body" dangerouslySetInnerHTML={ { __html : this.state.body} }></div>
    //   </div>
    // );
  }
}

Image.defaultProps = {
  row : 0
};
