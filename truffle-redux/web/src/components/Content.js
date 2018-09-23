import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

export function Content(props) {
	//if I have a store contract it should show store options
	console.log('Content PRops: ', props);
	let storeExists = false;

	// if(props.web3 && props.web3.web3.oppStore.address){
	//   myStore = props.web3.oppStore.address;
	// }

	function getContractAddress(props) {
		if (props.web3 && props.web3.oppStore && props.web3.oppStore.address) {
			storeExists = true;
			return <span className="store-address">{props.web3.oppStore.address}://Store</span>;
		} else {
			return '';
		}
	}
	function getMyStore(props) {}

	function myStoreOptions() {
		return (
			<div>
				{' '}
				<span className="nav-button">Add Product</span> <span className="nav-button">Check Purchases</span>
			</div>
		);
	}

	function createStore() {
		return <div className="nav-button">Create Store</div>;
	}
	return (
		<div className="App-intro">
			<div className="flexbox-parent">
				<div className="flexbox-item header ">
					<div className="title-bar">
						<span className="oppTitle">
							<span className="big-font">Open Pay</span>
							<span className="oppContractAddress">{getContractAddress(props)}</span>
						</span>
					</div>
				</div>

				<div className="flexbox-item fill-area content flexbox-item-grow">
					<div className="fill-area-content flexbox-item-grow">
						<div className="menu-bar">
							<div>{storeExists ? myStoreOptions() : createStore()}</div>
						</div>
						<br />
						<br />
						Emulates height 100% with a horizontal flexbox with stretch
						<br />
						<br />
						This box with a border should fill the blue area except for the padding (just to show the middle
						flexbox item).
					</div>
				</div>

				<div className="flexbox-item footer">
					Open Pay - <a href="www.dennisonbertram.com">Dennison Bertram</a>
				</div>
			</div>
		</div>
	);
}

Content.propTypes = {};

export default injectIntl(Content);
