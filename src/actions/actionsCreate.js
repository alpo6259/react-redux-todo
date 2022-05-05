import ACTION_TYPES from './actionTypes';

export const createTodo = newValues => ({
  type: ACTION_TYPES.TODO_CREATE,
  newValues,
});

export const checkedTodo = (newTodoInfo, idTodo) => ({
  type: ACTION_TYPES.TODO_CHEK,
  newTodoInfo,
  idTodo,
});

export const deleteTodo = idTodo => ({
  type: ACTION_TYPES.TODO_DELETE,
  idTodo,
});
