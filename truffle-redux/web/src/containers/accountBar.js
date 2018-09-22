import { connect } from 'react-redux';

import AccountBar from '../components/accountBar';

function mapState(state) {
  //console.log("LOG FROM HOME CONTAINER", state.web3.web3)
  return {
    web3: state.web3.web3,
    user: state.web3.user,
    userBalance: state.web3.userBalance,
  };
}

function mapDispatch(/* dispatch */) {
  return {};
}

export default connect(mapState, mapDispatch)(AccountBar);
