const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();
const IPFS = require('ipfs');
const ipfs = new IPFS();

const promisedIpfsPut = require('./utils/promisedIpfsPut');
const promisedIpfsData = require('./utils/promisedData');

ipfs.on('ready', () => {
	console.log(chalk.blue.bgWhite.bold('IPFS READY'));
});

//Attach the IPFS instance to the Koa context
app.context.ipfs = ipfs;

app.use(async (ctx, next) => {
	await next();
	const rt = ctx.response.get('X-Response-Time');
	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});

//Read via the query the object at the Hash Location
app.use(async (ctx, next) => {
  await next();

  const data = await promisedIpfsData(ctx.request.query.hash, ctx);

  const hashLocation = data.toString();
});

// Create a DAG IPFS object
app.use(async (ctx, next) => {
  await next();

	const obj = {
		Data: new Buffer.from(JSON.stringify(ctx.request.query)),
		Links: []
	};

	const example = await promisedIpfsPut(obj, ctx);

	// ctx.state.example = example.toJSON().multihash;
});

app.listen(3000);
console.log(chalk.bgBlue('Koa Server on port 3000'));
