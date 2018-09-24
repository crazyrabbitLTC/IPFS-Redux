import { connect } from 'react-redux';
// import { getStoreCount } from '../state/contract/actions';
import { getStoreDetails_THUNK } from '../../src/state/contract/actions'
import StoreDetails from '../components/StoreDetails';

function mapState(state) {
	return {
    contract: state.contract,
    web3: state.web3
	};
}

function mapDispatch(dispatch) {
	return {
    getStore: (storeAddress) => dispatch(getStoreDetails_THUNK(storeAddress))
	};
}

export default connect(mapState, mapDispatch)(StoreDetails);

