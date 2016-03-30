import React      from 'react';
import Uid        from 'utils/uid';
import classNames from 'classnames';

export default class SignupForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			emailSent : false,
			emailValid : false,
			email : ''
		};
	}

	handleEmailChange(e) {
		this.setState({
			email : e.target.value,
			emailValid : this._validateEmail(e.target.value),
		})
	}

	handleFormSubmit(e) {
		this.setState({
			emailSent : true
		});
	}

	render() {
		let formClass = classNames({
			'signup-form' : true,
			'signup-form--invalid-email' : !this.state.emailValid && !this.state.emailSent
		});

		let formView = (
			<div>
				<form
					onSubmit={ this.handleFormSubmit.bind(this) }
					method="post"
					action="https://script.google.com/macros/s/AKfycbxjh8hD7-MVzGPJ2090cM6ZZwyurs4Q0pksMmCKVFg82f5APmk/exec"
					target={ this.props.iframeId }
				>
					<input
						type="text"
						name="email"
						defaultValue={ this.state.email }
						onChange={ this.handleEmailChange.bind(this) }
						placeholder="Email address..."
					/>
					<button type="submit">Send</button>
				</form>
			</div>
		);

		let thanksView = (
			<div className="signup-form__thanks">Got it, thanks for subscribing!</div>
		);


		return (
			<div className={ formClass }>
				{ this.state.emailSent ? thanksView : formView }
				<iframe name={ this.props.iframeId} id={ this.props.iframeId } style={{ display : 'none' }}></iframe>
			</div>
		)
	}

	_validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

}

SignupForm.defaultProps = {
	iframeId : Uid.get()
};




/*

<form id="formID" method="post" action="https://script.google.com/macros/s/AKfycbxjh8hD7-MVzGPJ2090cM6ZZwyurs4Q0pksMmCKVFg82f5APmk/exec" target="hidden_iframe">
	<input type="input" name="email" value="">
</form>

<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>

*/
