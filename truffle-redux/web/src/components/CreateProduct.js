import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class CreateProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			productDescription: '',
			productName: '',
			quantity: 0,
			price: 0,
			previousHash: '0x0'
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

	async createProduct() {
		let hash = await this.createInIPFS();
		let price = this.state.price;
		//mocking productID, really this should come from the contract in advance
		let productID = 1;

		this.props.createProduct(price, productID, hash);
		console.log('creat product fired price and hash are', price, hash);
	}

	async createInIPFS() {
		const IPFSNODE = window.IPFSNODE;
		console.log('WHAT IS IPFSNODE? ', IPFSNODE);
		console.log('WHAT IS OPP MARKET? ', window.oppMarketContract);

		const state = {
			productDescription: this.state.productDescription,
			productName: this.state.productName,
			quantity: this.state.quantity,
			price: this.state.price,
			previousHash: this.state.previousHash
		};

		console.log('THIS IS THE STATE TO PUT IN IPFS: ', state);
		const addedStateFile = await IPFSNODE.files.add({
			path: 'demo.txt',
			content: Buffer.from(JSON.stringify(state))
		});
		console.log('The file hash in IPFS: ', addedStateFile[0].hash);

		this.setState(() => {
			return { ...this.state, previousHash: addedStateFile[0].hash };
		});

		return addedStateFile[0].hash;
	}

	render() {
		return (
			<div>
				<div>
					{this.state.previousHash !== '0x0' ? (
						<div className="product-describe">
							<div>State Object:</div>

								<a href={"http://ipfs.io/ipfs/" + this.state.previousHash} target="_blank">State Object</a>
						</div>
					) : (
						<span />
					)}
				</div>
				<div className="create-product">
					<form className="create-product-form">
						<span className="create-product-form">Create Product:</span>

						<label>
							Product Name:
							<input
								name="productName"
								type="text"
								value={this.state.productName}
								onChange={this.handleInputChange}
							/>
						</label>

						<label>
							Product Description:
							<input
								name="productDescription"
								type="text"
								value={this.state.productDescription}
								onChange={this.handleInputChange}
							/>
						</label>

						<label>
							Quantity:
							<input
								name="quantity"
								type="number"
								value={this.state.quantity}
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							Price:
							<input
								name="price"
								type="number"
								value={this.state.price}
								onChange={this.handleInputChange}
							/>
						</label>
						<Button
							bsStyle="info"
							onClick={() => {
								this.createProduct();
							}}
						>
							Create
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreateProduct;
