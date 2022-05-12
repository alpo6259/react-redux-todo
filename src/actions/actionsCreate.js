import ACTION_TYPES from './actionTypes';

// ***** create TODO
export const createTodoAction = values => ({
  type: ACTION_TYPES.CREATE_TODO_ACTION,
  values,
});
export const createTodoRequest = () => ({
  type: ACTION_TYPES.CREATE_TODO_REQUEST,
});
export const createTodoSuccess = newTextTodo => {
  return {
    type: ACTION_TYPES.CREATE_TODO_SUCCESS,
    newTextTodo,
  };
};
export const createTodoError = err => ({
  type: ACTION_TYPES.CREATE_TODO_ERROR,
  err,
});

// ***** get TODO
export const getTodoAction = () => ({
  type: ACTION_TYPES.GET_TODO_ACTION,
});
export const getTodoRequest = () => ({
  type: ACTION_TYPES.GET_TODO_REQUEST,
});
export const getTodoSuccess = newTodos => ({
  type: ACTION_TYPES.GET_TODO_SUCCESS,
  newTodos,
});
export const getTodoError = err => ({
  type: ACTION_TYPES.GET_TODO_ERROR,
  err,
});

// ***** isDone TODO
export const doneTodoAction = (id, values) => ({
  type: ACTION_TYPES.ISDONE_TODO_ACTION,
  id,
  values,
});
export const doneTodoRequest = () => ({
  type: ACTION_TYPES.ISDONE_TODO_REQUEST,
});
export const doneTodoSuccess = updateTodo => ({
  type: ACTION_TYPES.ISDONE_TODO_SUCCESS,
  updateTodo,
});
export const doneTodoError = err => ({
  type: ACTION_TYPES.ISDONE_TODO_ERROR,
  err,
});

// ***** delete TODO
export const deleteTodoAction = id => ({
  type: ACTION_TYPES.DELETE_TODO_ACTION,
  id,
});
export const deleteTodoRequest = () => ({
  type: ACTION_TYPES.DELETE_TODO_REQUEST,
});
export const deleteTodoSuccess = idtodo => ({
  type: ACTION_TYPES.DELETE_TODO_SUCCESS,
  idtodo,
});
export const deleteTodoError = e => ({
  type: ACTION_TYPES.DELETE_TODO_ERROR,
  e,
});
