import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function Purchases(props) {


	return (
		<Fragment>
			<h3>List of Purchases</h3>
		</Fragment>
	);
}

Purchases.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

export default Purchases;
