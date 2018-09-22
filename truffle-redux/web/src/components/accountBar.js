import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

export function AccountBar(props) {
  console.log('Account Bar Props: ', props);

  let stores = 0;
  stores = props.contractStoreCount(props.web3);
	return (
		<Fragment>
			<div className="Account-Bar">
      <div className="ContractStoreCount">Number of Stores: {stores}</div>
				<div className="Account-Bar Eth">
        <span>IPFS {props.IPFS.IPFS_REQ_READY ? "Ready" : <Loader type="ThreeDots" color="green" height={40} width={80} />}</span>
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
