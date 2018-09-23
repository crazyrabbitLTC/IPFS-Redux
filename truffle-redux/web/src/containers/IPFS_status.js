import { connect } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { putToIPFS_THUNK, IPFS_reqPending, addToIPFS, getFromIPFS_THUNK } from '../state/IPFS/actions'

import IPFS_status from '../components/IPFS_status';

function mapState(state) {
  //console.log("In the IPFS_STATS", state.IPFS)
  return {
    IPFS: state.IPFS,
    web3: state.web3.web3,
    user: state.web3.user,
    userBalance: state.web3.userBalance,
  };
}

function mapDispatch(dispatch) {
  return {
    putToIPFS: (data) => dispatch((putToIPFS_THUNK(data))),
    getFromIPFS: (data) => dispatch((getFromIPFS_THUNK(data))),
    IPFS_STATUS: {IPFS_reqPending, addToIPFS}
  };
}

export default connect(mapState, mapDispatch)(IPFS_status);
