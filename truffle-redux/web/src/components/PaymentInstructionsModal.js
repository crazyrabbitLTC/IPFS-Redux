import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

export function PaymentInstructionsModal(props) {
	console.log('Account Bar Props: ', props);
	return (
		<Fragment>
			<div className="Payment-Modal">
			 PAYMENT MODAL!
			</div>
		</Fragment>
	);
}

PaymentInstructionsModal.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

export default PaymentInstructionsModal;
