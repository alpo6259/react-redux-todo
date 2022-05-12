import ACTION_TYPES from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { createTodoSaga, deleteTodoSaga, getTodosSaga, updateTodoSaga } from './TodoSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TODO_ACTION, createTodoSaga);
  yield takeLatest(ACTION_TYPES.GET_TODO_ACTION, getTodosSaga);
  yield takeLatest(ACTION_TYPES.ISDONE_TODO_ACTION, updateTodoSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TODO_ACTION, deleteTodoSaga);
}

export default rootSaga;
