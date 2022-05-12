import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todo: [],
  isFatching: false,
  error: null,
  edit:null
};

const todoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    // **********create-todo
    case ACTION_TYPES.CREATE_TODO_REQUEST: {
      return { ...state, isFatching: true, error: null };
    }
    case ACTION_TYPES.CREATE_TODO_SUCCESS: {
      const { newTextTodo } = action;
      const { todo } = state;
      const newTodo = [...todo, { ...newTextTodo }];
      return { ...state, todo: newTodo, isFatching: false };
    }
    case ACTION_TYPES.CREATE_TODO_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFatching: false };
    }

    // ********get-todo
    case ACTION_TYPES.GET_TODO_REQUEST: {
      return { ...state, isFatching: true, error: null };
    }
    case ACTION_TYPES.GET_TODO_SUCCESS: {
      const { newTodos: valueTodo } = action;

      const getTodo = [...valueTodo];
      return { ...state, todo: getTodo, isFatching: false };
    }
    case ACTION_TYPES.GET_TODO_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFatching: false };
    }

    // **********isdone-todo
    case ACTION_TYPES.ISDONE_TODO_REQUEST: {
      return { ...state, isFatching: true, error: null };
    }
    case ACTION_TYPES.ISDONE_TODO_SUCCESS: {
      const { updateTodo } = action;
      const { todo } = state;
      const newTodo = [...todo];
      const todoIndex = newTodo.findIndex(t => t.id === updateTodo.id);
      newTodo[todoIndex] = { ...updateTodo };
      return { ...state, todo: newTodo, isFatching: false };
    }
    case ACTION_TYPES.ISDONE_TODO_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFatching: false };
    }

    // ***********delete -todo;
    case ACTION_TYPES.DELETE_TODO_REQUEST: {
      return { ...state, isFatching: true, error: null };
    }
    case ACTION_TYPES.DELETE_TODO_SUCCESS: {
      const { idtodo } = action;
      const { todo } = state;
      const newTodo = [...todo];
      const todoIndex = newTodo.findIndex(t => t.id === idtodo);
      newTodo.splice(todoIndex, 1);
      return { ...state, todo: newTodo, isFatching: false };
    }
    case ACTION_TYPES.DELETE_TODO_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFatching: false };
    }

    default:
      return state;
  }
};

export default todoReducer;
