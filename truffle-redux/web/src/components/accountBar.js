import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import { Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function AccountBar(props = 0) {
	console.log('Account bar props', props);
	let balance = parseFloat(props.userBalance).toFixed(2);
	return (
		<Fragment>
			<div className="Account-Bar">
				<div className="Account-Bar Eth">
					<div className="AddressBar">
						<div className="Account-Bar-Balance">
							<span>{balance} ETH</span>
						</div>
						<span className="Account-Bar-Eth-Address">{props.user}</span>
						<span>
							{props.IPFS.IPFS_REQ_READY ? (
								'IPFS Ready'
							) : (
								<Loader type="ThreeDots" color="green" height={10} width={30} />
							)}
						</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

// AccountBar.propTypes = {
// 	web3: PropTypes.object,
// 	IPFS: PropTypes.object
// };

export default AccountBar;
