import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FormIpfs from './FormIpfs';

// import { initialState } from '../state/IPFS/reducers'

export function Home(props) {
	//console.log('The Web3 availible here is', props.web3);
	let accounts = false;

	// async function getAccounts(props){
	//   console.log("Get accounts props", props);
	//   accounts =  await promisify(cb => props.web3.accounts(cb));
	//   console.log("Indies the accounts", accounts)

	//  }

	// function getAccounts

	//  if(accounts){
	//   console.log("The accounts are", accounts)
	// }

	function thing() {
		return new Promise((resolve, reject) => {
			props.web3.accounts((err, account) => {
				if (err) {
					reject(err);
				}
				console.log('the account', account);
				resolve(account);
			});
		});
  }

  async function thing2() {
    if(!props.web3){
      return
    }
    return await props.web3.accounts();
  }

  async function getit(){
    accounts = await thing2()
    console.log("This is the accounts", accounts)
  }
  // if(props.web3){
  //   console.log('get it back', getit());
  // }
  getit();

	return (
		<Fragment>
			<h3>Account: {accounts ? accounts[0] : 'account not loaded'} </h3>
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
