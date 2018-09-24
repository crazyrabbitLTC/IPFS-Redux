import React from 'react';
import { Button } from 'react-bootstrap';

class StoreDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			storeAddress: '0x0',
			store: {}
    };

    this.loadProducts = this.loadProducts.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

  loadProducts(){
    console.log("Calling the thunk for store details");
    this.props.getStore(this.state.storeAddress);

  }
	componentDidMount() {
    // if(this.state.storeAddress !== '0x0'){
    //   this.props.getStore(this.state.storeAddress);
    //   console.log("Calling the thunk for store details");
    // }

		// this.setState(() => {
		// 	storeAddress: this.props.contract.storeAddress;
		// });
	}

	componentDidUpdate(prevProps) {
		if (this.props.contract.storeAddress !== prevProps.contract.storeAddress) {
      // if(this.state.storeAddress !== '0x0'){
      //   this.props.getStore(this.state.storeAddress);
      //   console.log("Calling the thunk for store details");
      // }
			this.setState(() => {
				return ({storeAddress: this.props.contract.storeAddress})
			});
    }

	}

	render() {
		console.log('The Store Details props: ', this.props);
		return (
			<div className="store-details" onClick={() => {this.loadProducts()}}>
				This is the StoreDetails. Address {this.state.storeAddress}
			</div>
		);
	}
}

export default StoreDetails;
