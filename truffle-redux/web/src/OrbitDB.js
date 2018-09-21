import OrbitDB from 'orbit-db'

async function runOrbit(IPFSNODE){

  console.log("IPFS is READY in ORBIT DB MODULE")

  const orbitdb = new OrbitDB(IPFSNODE)

  // Create / Open a database
  const db = await orbitdb.log('hello')
  await db.load()

  // Listen for updates from peers
  db.events.on('replicated', (address) => {
    console.log(db.iterator({ limit: -1 }).collect())
  })

  // Add an entry
  const hash = await db.add('world')
  console.log("THE HASH ENTERED INTO ORBIT", hash)

  // Query
  const result = db.iterator({ limit: -1 }).collect()
  console.log("THE RESPONSE FROM THE QUERY ON ORBIT", JSON.stringify(result.value, null, 2))

  return db
}

export default runOrbit;
