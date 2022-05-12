import { put } from 'redux-saga/effects';
import {
  createTodoError,
  createTodoRequest,
  createTodoSuccess,
  deleteTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  doneTodoError,
  doneTodoRequest,
  doneTodoSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
} from '../actions/actionsCreate';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api';

export function * createTodoSaga ({ values }) {
  yield put(createTodoRequest());
  try {
    const data = yield createTodo(values);
    yield put(createTodoSuccess(data));
  } catch (e) {
    yield put(createTodoError(e));
  }
}

export function * getTodosSaga () {
  yield put(getTodoRequest());
  try {
    const data = yield getTodos();
    yield put(getTodoSuccess(data));
  } catch (e) {
    console.log('e', e);
    yield put(getTodoError(e));
  }
}

export function * updateTodoSaga ({ id, values }) {
  yield put(doneTodoRequest());
  try {
    const data = yield updateTodo(id, values);
    yield put(doneTodoSuccess(data));
  } catch (e) {
    yield put(doneTodoError(e));
  }
}

export function * deleteTodoSaga ({ id }) {
  yield put(deleteTodoRequest());
  try {
    const data = yield deleteTodo(id);
    yield put(deleteTodoSuccess(id));
  } catch (e) {
    yield put(deleteTodoError(e));
  }
}
