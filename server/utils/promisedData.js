function promisedIpfsData(obj, ctx) {
	return new Promise((resolve, reject) => {
		ctx.ipfs.object.data(obj, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}

module.exports = promisedIpfsData;
