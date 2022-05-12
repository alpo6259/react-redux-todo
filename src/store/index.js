import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const { composeWithDevTools } = require('@redux-devtools/extension');
const { createStore, applyMiddleware } = require('redux');

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
