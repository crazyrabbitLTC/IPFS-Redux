function promisedNode(obj, ctx) {
	return new Promise((resolve, reject) => {
		ctx.ipfs.object.put(obj, (err, node) => {
			if (err) {
				reject(err);
			}
			resolve(node);
		});
  });
}

module.exports = promisedNode;

