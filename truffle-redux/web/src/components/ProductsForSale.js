import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

export function ProductsForSale(props) {
	console.log('Account Bar Props: ', props);
	return (
		<Fragment>
			<div className="Account-Bar">
				<div className="Account-Bar Eth">
        <span>IPFS {props.IPFS.IPFS_REQ_READY ? "Ready" : <Loader type="ThreeDots" color="green" height={40} width={80} />}</span>
					<span className="Account-Bar-Text">ProductsForSale</span>
					<span className="Account-Bar-Eth-Address">{props.user}</span>
				</div>

        <div className="Account-Bar-Balance">{props.userBalance} ETH</div>
			</div>
		</Fragment>
	);
}

ProductsForSale.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

export default ProductsForSale;
