import IPFS from 'ipfs'

//enable pubSub for OrbitDB
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  }
}

const IPFSNODE = new IPFS(ipfsOptions)

export default IPFSNODE;
