const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();



// logger

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
});

// response
app.use(async (ctx) => {
	ctx.body = 'hellow world';

	console.log(chalk.blue(ctx.request.URL));
	console.log('Request', ctx.request.query);
	console.log(ctx.state.user);
});

app.listen(3000);
console.log(chalk.blue('Koa Server on port 3000'));

//Lets use this to attach the IPFS and OrbitDB instance to APP
// app.context.db = db();

// app.use(async ctx => {
//   console.log(ctx.db);
// });
