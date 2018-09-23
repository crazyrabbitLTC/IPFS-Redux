import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import CreateProduct from './CreateProduct';
import Purchases from './Purchases';

export function Content(props) {

	//console.log('Content Props: ', props);
	let storeExists = false;


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
				<span className="nav-button">
					<Link to="/createProduct">Create Product</Link>
				</span>{' '}
				<span className="nav-button">
					<Link to="/purchases">Check Purchases</Link>
				</span>
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
						<Switch>
							<Route exact path="/createProduct" component={CreateProduct} />
							<Route exact path="/purchases" component={Purchases} />
							{/* <Route path="/about" component={About} /> */}

							{/* <Route exact path="/demo" component={IPFS_status} />
            <Route component={NoMatch} /> */}
						</Switch>

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
