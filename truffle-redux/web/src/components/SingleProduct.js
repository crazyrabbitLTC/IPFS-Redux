import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productHash: ''
		};
	}
	componentDidMount() {
		console.log(this.props.location.search);
		this.setState(() => ({ productHash: this.props.location.search }));
	}

	render() {
		return (
			<Fragment>
				<div className="Single-Product-Description">
					<div className="Single-Product-Title">Product Name</div>
					<div>{this.state.productHash}</div>
				</div>
			</Fragment>
		);
	}
}

SingleProduct.propTypes = {
	web3: PropTypes.object
};

SingleProduct.defaultProps = {
	web3: null
};

export default SingleProduct;
