import React from 'react';
import {Button} from 'react-bootstrap';

class CreateProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			productDescription: '',
			productName: '',
			quantity: 0,
      price: 0
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

  createProduct(){
    let hash = this.createInIPFS();
    let price = this.state.price;
    //mocking productID, really this should come from the contract in advance
    let productID = 1;
    this.props.createProduct(price, productID, hash);

  }

  createInIPFS(){
    //right now we mockIPFS
    return "DEMO HASH!"
  }


	render() {
		return (
      <div className="create-product">
			<form className="create-product-form">

				<span>Create Product:</span>

				<label>
					Product Name:
					<input
						name="productName"
						type="text"
						value={this.state.productName}
						onChange={this.handleInputChange}
					/>
				</label>
				<br />
				<label>
					Product Description:
					<input
						name="productDescription"
						type="text"
						value={this.state.productDescription}
						onChange={this.handleInputChange}
					/>
				</label>
				<br />
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
					<input name="price" type="number" value={this.state.price} onChange={this.handleInputChange} />
				</label>
        <Button bsStyle="info" onClick={() => {this.createProduct()}}>Create</Button>
			</form></div>

		);
	}
}

export default CreateProduct;
