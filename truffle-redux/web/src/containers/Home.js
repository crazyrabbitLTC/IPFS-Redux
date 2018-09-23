import { connect } from 'react-redux';
import { getStoreCount } from '../state/contract/actions';

import Home from '../components/Home';

function mapState(state) {
	//console.log("LOG FROM HOME CONTAINER", state.web3.web3)
	return {
		web3: state.web3.web3,
		user: state.web3.user,
		userBalance: state.web3.userBalance,
		loading: state.web3.isFetching,
		IPFS: state.IPFS,
		ALLSTATE: state,
		contract: state.contract
	};
}

function mapDispatch(dispatch) {
	return {
		contractStoreCount: (web3) => dispatch(getStoreCount(web3))
	};
}

export default connect(mapState, mapDispatch)(Home);
