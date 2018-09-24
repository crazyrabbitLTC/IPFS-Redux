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
    //this calls the user store, of course it shoudl call any store.
    this.props.getStore(this.props.web3.user[0]);

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
		if (this.props.contract !== prevProps.contract) {

			this.setState(() => {
				return ({storeAddress: this.props.contract.storeAddress, store: this.props.contract.store})
			});
    }

	}

	render() {
		console.log('The Store Details props: ', this.props);
		return (
			<div className="store-details" >
      <Button bsStyle="info" onClick={() => {this.loadProducts()}} >Load Store</Button>
        This is the StoreDetails. <br/>Address {this.state.storeAddress}
        <div>Store Name: {JSON.stringify(this.state.store)}</div>
			</div>
		);
	}
}

export default StoreDetails;
