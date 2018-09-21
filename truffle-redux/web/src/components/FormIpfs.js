import React from 'react';

class FormIpfs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			returnValue: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		//alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
		this.props.sendData(this.state.value);
	}

	render() {
		// console.log('The form props ', this.props.sendData);
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default FormIpfs;
