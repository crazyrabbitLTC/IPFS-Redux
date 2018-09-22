import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export function AccountBar(props) {
	console.log('Account Bar Props: ', props);
	return (
		<Fragment>
			<div className="Account-Bar">
				<div className="Account-Bar Eth">
					<span className="Account-Bar-Text">AccountBar</span>
					<span className="Account-Bar-Eth-Address">{props.user}</span>
				</div>
        <div className="Account-Bar-Balance">{props.userBalance} ETH</div>
			</div>
		</Fragment>
	);
}

AccountBar.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

export default AccountBar;
