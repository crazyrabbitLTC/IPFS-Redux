import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export function AccountBar(props) {
	return (
		<Fragment>
			<h1>Account bar!</h1>
		</Fragment>
	);
}

AccountBar.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

export default AccountBar;
