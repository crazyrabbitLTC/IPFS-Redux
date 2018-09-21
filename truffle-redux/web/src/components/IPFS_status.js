import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import FormIpfs from './FormIpfs'

// import { initialState } from '../state/IPFS/reducers'

export function Home(props) {
//console.log("The Props of the IPFS_STatus: ", props)
    return (
      <Fragment>
        <h3>HERE WE ARE!</h3>
        <span>
          {props.IPFS.IPFS_REQ_READY ? (
            <h3>IPFS IS READY</h3>
          ) : (
            <h3>IPFS IS NOT READY</h3>
          )}
        </span>
        <FormIpfs sendData={props.putToIPFS}/>
      </Fragment>
    )
  }


Home.propTypes = {
  web3: PropTypes.object,
  IPFS: PropTypes.object
}

// Home.defaultProps = {
//   web3: null,
//   IPFS: initialState,
// };

export default Home
