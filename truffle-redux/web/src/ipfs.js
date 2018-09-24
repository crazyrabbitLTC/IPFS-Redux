import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';

//enable pubSub for OrbitDB
const ipfsOptions = {
	EXPERIMENTAL: {
		pubsub: true
	}
};

const IPFSNODE = new IPFS(ipfsOptions);

// loadOrbit(IPFSNODE);

// async function loadOrbit(IPFSNODE) {
// 	const orbitdb = new OrbitDB(IPFSNODE);
// 	const access = {
// 		// Give write access to ourselves
// 		write: [ orbitdb.key.getPublic('hex') ]
// 	};

// 	const db = await orbitdb.keyvalue('first-database', access);
// 	console.log(db.address.toString());

// 	await db.put('dennison', 'bertram');
// 	const value = db.get('dennison');
// 	console.log('the returned value is', value);
// }

export default IPFSNODE;
