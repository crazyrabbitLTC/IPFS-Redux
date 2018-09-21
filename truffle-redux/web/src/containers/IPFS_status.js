import { connect } from 'react-redux';
import { putToIPFS_THUNK, IPFS_reqPending, addToIPFS } from '../state/IPFS/actions'

import IPFS_status from '../components/IPFS_status';

function mapState(state) {
  //console.log("In the IPFS_STATS", state.IPFS)
  return {
    IPFS: state.IPFS
  };
}

function mapDispatch(/* dispatch */) {
  return {
    putToIPFS: putToIPFS_THUNK,
    IPFS_STATUS: {IPFS_reqPending, addToIPFS}
  };
}

export default connect(mapState, mapDispatch)(IPFS_status);
