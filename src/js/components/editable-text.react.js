import React from 'react';

export default class EditableText extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editable : false,
			value : props.value
		}
	}

	handleInputChange(e) {
		console.log(e.nativeEvent);
		this.setState({
			value : e.target.innerHTML
		});
	}

  render() {
    return (
      <div
				contentEditable={ true }
				onInput={ this.handleInputChange.bind(this) }
				onBlur={ this.handleInputChange.bind(this) }
				className={ 'editable-text ' + ( this.props.modifier ? 'editable-text--' + this.props.modifier : '') }
				dangerouslySetInnerHTML={{ __html : this.state.value }}>
      </div>
    )
  }
}
