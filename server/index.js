const chalk = require('chalk');
const Koa = require('koa');
const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
const IPFS = require('ipfs');
const ipfs = new IPFS();

const promisedIpfsPut = require('./utils/promisedIpfsPut');
const promisedIpfsData = require('./utils/promisedData');

ipfs.on('ready', () => {
	console.log(chalk.blue.bgWhite.bold('IPFS READY'));
});

//Attach the IPFS instance to the Koa context
app.context.ipfs = ipfs;

// x-response-time
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

app.use(bodyParser());

router.get('IPFS_QUERY_STRING', '/api', async (ctx) => {
	const data = await promisedIpfsData(ctx.request.query.hash, ctx);
	ctx.body = data.toString();
});

router.put('IPFS_QUERY_STRING', '/api', async (ctx) => {
	if (ctx.request.query) {
		const obj = {
			Data: new Buffer.from(JSON.stringify(ctx.request.query)),
			Links: []
		};

		const example = await promisedIpfsPut(obj, ctx);
		ctx.body = example.toJSON().multihash;
	}

	// if (ctx.request.body) {
	// 	const obj = {
	// 		Data: new Buffer.from(JSON.stringify(ctx.request.body)),
	// 		Links: []
	// 	};

	// 	const example = await promisedIpfsPut(obj, ctx);
	// 	ctx.body = example.toJSON().multihash;
	// }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log(chalk.bgBlue('Koa Server on port 3000'));
