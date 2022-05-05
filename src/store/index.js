import rootReducer from '../reducers';

const { composeWithDevTools } = require('@redux-devtools/extension');
const { createStore, applyMiddleware } = require('redux');

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
