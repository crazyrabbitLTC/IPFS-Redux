import { connect } from 'react-redux';

import Demo from '../components/IPFS_status';

function mapState(state) {
  return {
    web3: state.web3.web3,
    message: state.message
  };
}

function mapDispatch(/* dispatch */) {
  return {};
}

export default connect(mapState, mapDispatch)(Demo);
