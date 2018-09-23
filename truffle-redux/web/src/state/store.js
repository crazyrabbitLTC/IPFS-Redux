import {
	createStore,
	applyMiddleware,
	compose
} from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

function configureStore(/* deps = {} */) {
	/* eslint-disable-next-line no-underscore-dangle */
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// add middlewares here
	const middleware = [ thunkMiddleware ];
	// use the logger in development mode - this is set in webpack.config.dev.js
	if (process.env.NODE_ENV !== 'production') {
		/* eslint-disable-next-line no-console */
		console.warn('----- In Development Mode -----');
		/* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
		middleware.push(logger);
	}

	return createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
}

const store = configureStore();

export { configureStore, store };
