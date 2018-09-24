import React from 'react';
import { Button } from 'react-bootstrap';

class CreateStore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			storeName: '',
			storeHash: ''
		};

    this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
  }

  callCreateStore(){

    const name = this.state.storeName;
    this.props.createStore(name);

  }

	//The onSubmit creates a complex action to submit the state to OrbitDB
	//Later this action should submit a complete body of the Website to IPFS and
	//return the hash of this "store".
	//For now we should submit to OrbitDB and then return this hash to state as
	//StoreHash.
	// return this HASH
	//OrbitDB r

	render() {
		console.log('Inside create store component, the prosp are: ', this.props);

		return (
			<form>
				<label>
					Store Name:
					<input
						name="storeName"
						type="text"
						value={this.state.storeName}
						onChange={this.handleInputChange}
					/>
				</label>

					<Button bsStyle="info" onClick={() => {this.callCreateStore()}} >Create</Button>

			</form>
		);
	}
}

export default CreateStore;
