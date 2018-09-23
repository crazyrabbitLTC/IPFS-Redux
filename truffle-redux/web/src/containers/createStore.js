import { connect } from 'react-redux';
// import { getStoreCount } from '../state/contract/actions';

import CreateStore from '../components/CreateStore';

function mapState(state) {
	//console.log("LOG FROM HOME CONTAINER", state.web3.web3)
	return {
		user: state.web3.user,
		userBalance: state.web3.userBalance,
		contract: state.contract
	};
}

function mapDispatch(dispatch) {
	return {

	};
}

export default connect(mapState, mapDispatch)(CreateStore);
