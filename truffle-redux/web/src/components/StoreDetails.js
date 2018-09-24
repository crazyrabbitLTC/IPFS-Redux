import React from 'react';
import { Button } from 'react-bootstrap';
import { BigNumber } from 'bignumber.js';

class StoreDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			storeAddress: '0x0',
			store: {
				storeAddress: '0x0',
				purchaseCount: '0',
				productCount: '0',
				owner: '0x0',
				hash: '0x0'
			}
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

	loadProducts() {
		console.log('Calling the thunk for store details');
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
				// const store = {
				//   storeAddress: this.props.contract.store.owner,
				//   purchaseCount: this.props.contract.store.purchaseCount.toNumber(),
				//   productCount:
				//   this.props.contract.store.productCount.toNumber(),
				//   hash:
				//   this.props.contract.store.hash
				// }
				return {
					storeAddress: this.props.contract.storeAddress,
					store: {
						storeAddress: this.props.contract.store.owner,
						purchaseCount: JSON.stringify(this.props.contract.store.purchaseCount),
						productCount: JSON.stringify(this.props.contract.store.productCount),
						hash: this.props.contract.store.hash
					}
				};
			});
		}
	}

	render() {
		console.log('The Store Details props: ', this.props);
		return (
			<div className="store-details">
				<Button
					bsStyle="info"
					onClick={() => {
						this.loadProducts();
					}}
				>
					Load Store
				</Button>

				<div>Store Name: {this.state.store.hash}</div>
				<div>Number of Products: {this.state.store.productCount}</div>
				<div>Number of Purchases: {this.state.store.purchaseCount}</div>
				<div>Store Owner: {JSON.stringify(this.props.contract.store.owner)}</div>
				{/* <div>{JSON.stringify(this.state.store)}</div> */}
			</div>
		);
	}
}

export default StoreDetails;
