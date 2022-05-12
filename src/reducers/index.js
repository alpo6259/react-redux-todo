import todoReducer from './todoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todoData: todoReducer,
});

export default rootReducer;
