import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import { initialState } from '../state/IPFS/reducers'



export function Home(props) {
  let IPFS = props.IPFS;
  console.log("The props", IPFS.IPFS_REQ_READY);
  return (
    <Fragment>
      <h3>HERE WE ARE!</h3>
  <span>{IPFS.IPFS_REQ_READY ? <h3>IPFS IS READY</h3> : <h3>IPFS IS NOT READY</h3>}</span>
    </Fragment>
  );
}

Home.propTypes = {
  web3: PropTypes.object,
  IPFS: PropTypes.object
};

// Home.defaultProps = {
//   web3: null,
//   IPFS: initialState,
// };

export default Home;
