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

// const version = await node.version();
// const myobj = { Key: 'Value' };
// const filesAdded = await node.files.add({
//   path: 'hello.txt',
//   content: Buffer.from(JSON.stringify(myobj))
// });

// console.log('Version:', version.version);
// console.log('Added file:', filesAdded[0].path, filesAdded[0].hash);

// const fileBuffer = await node.files.cat(filesAdded[0].hash);

// console.log('Added files contents:', fileBuffer.toString());
