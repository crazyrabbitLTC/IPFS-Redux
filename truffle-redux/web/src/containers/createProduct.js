import { connect } from 'react-redux';
// import { getStoreCount } from '../state/contract/actions';
import { createProduct_THUNK } from '../../src/state/contract/actions'
import CreateProduct from '../components/CreateProduct';

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
    createProduct: (price, productID, hash) => dispatch(createProduct_THUNK(price, productID,hash))
	};
}

export default connect(mapState, mapDispatch)(CreateProduct);

