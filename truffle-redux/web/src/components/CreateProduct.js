import React from 'react';

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

	render() {
		return (
			<form>
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
			</form>
		);
	}
}

export default CreateProduct;
