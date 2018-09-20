import { connect } from 'react-redux';

import IPFS_status from '../components/IPFS_status';

function mapState(state) {
  //console.log("In the IPFS_STATS", state.IPFS)
  return {
    IPFS: state.IPFS
  };
}

function mapDispatch(/* dispatch */) {
  return {};
}

export default connect(mapState, mapDispatch)(IPFS_status);
