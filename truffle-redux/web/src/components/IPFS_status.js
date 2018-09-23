import React, { Fragment } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import FormIpfs from './FormIpfs';

export function Home(props) {

	return (

		<Fragment>
			<h3>Account: {props.user} Balance: {props.userBalance}</h3>
			<h3>Last Form State Saved:</h3>
			<h3>{window.localStorage.getItem('IPFS_index')}</h3>
			<span>{props.IPFS.IPFS_REQ_READY ? <h3>IPFS IS READY</h3> : <h3>IPFS IS NOT READY</h3>}</span>
			<FormIpfs sendData={props.putToIPFS} />
		</Fragment>
	);
}

Home.propTypes = {
	web3: PropTypes.object,
	IPFS: PropTypes.object
};

// Home.defaultProps = {
//   web3: null,
//   IPFS: initialState,
// };

export default Home;
