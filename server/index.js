const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();
const IPFS = require('ipfs');
const ipfs = new IPFS();

const promisedNode = require('./utils/promisedNode');
ipfs.on('ready', () => {
	console.log(chalk.blue.bgWhite.bold('IPFS READY'));
});

app.context.ipfs = ipfs;

app.use(async (ctx, next) => {
	ctx.state.user = 'mike';
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

  console.log("this!", ctx.state.example);
});


// response
app.use(async (ctx, next) => {
	await next();

	const obj = {
		Data: new Buffer(JSON.stringify(ctx.request.query)),
		Links: []
	};

	const example = await promisedNode(obj, ctx);

	ctx.state.example = example.toJSON().multihash;
});

app.use(async (ctx) => {
	// ipfs.object.data(hash, (err, data) => {
	// 	if (err) {
	// 		throw err;
	// 	}
	// 	console.log('Getting the data back', data.toString());
	// 	// Logs:
	// 	// some data
  // });

});

app.listen(3000);
console.log(chalk.bgBlue('Koa Server on port 3000'));

//Lets use this to attach the IPFS and OrbitDB instance to APP
// app.context.db = db();

// app.use(async ctx => {
//   console.log(ctx.db);
// });
