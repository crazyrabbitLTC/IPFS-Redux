import OrbitDB from 'orbit-db';

async function runOrbit(IPFSNODE, account) {
  //const orbitdb = new OrbitDB(IPFSNODE);
  const orbitdb = new OrbitDB(IPFSNODE);

  console.log("OrbitDB Account", account);
  // // Create / Open a database
  //Obviously in the future the database should be linked to the user themselves, not one giant general database as we need to duplicate for everyone.
  const db = await orbitdb.feed("stackathon");
  // await db.load();
  // const hash = await db.add({title: 'Hello', content: 'World'});

  // db.events.on('replicated', (address) => {
  //   console.log(db.iterator({ limit: -1 }).collect())
  // })


  // console.log("OrbitDB loaded", db);
  // console.log("Orbitdb hash", hash)

	// // // Listen for updates from peers
	// db.events.on('replicated', (address) => {
	// 	console.log(db.iterator({ limit: -1 }).collect());
	// });

	// Add an entry
	// const hash = await db.add('world')

	// Query
	// const result = db.iterator({ limit: -1 }).collect()
	// console.log("THE RESPONSE FROM THE QUERY ON ORBIT", JSON.stringify(result.value, null, 2))

	return db;
}

export default runOrbit;
