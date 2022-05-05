import todoReducer from './todoReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  todoData: todoReducer,
});

export default rootReducer;
