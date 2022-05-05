import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  todo: [
    {
      id: 0,
      name: 'test string',
      isChek: false,
    },
  ],
  isValid: true,
};

let serial = 1;

const todoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.TODO_CREATE: {
      const { newValues } = action;
      const { todo } = state;
      const newTodo = [...todo, { ...newValues, isChek: false, id: serial++ }];
      return { ...state, todo: newTodo };
    }

    case ACTION_TYPES.TODO_CHEK: {
      const { newTodoInfo, idTodo } = action;
      const { todo } = state;

      const newTodo = [...todo];
      const todoIndex = newTodo.findIndex(v => v.id === idTodo);
      newTodo[todoIndex] = { ...newTodo[todoIndex], ...newTodoInfo };

      return { ...state, todo: newTodo };
    }

    case ACTION_TYPES.TODO_DELETE: {
      const { idTodo } = action;
      const { todo } = state;
      const newTodo = [...todo];

      const todoIndex = newTodo.findIndex(c => c.id === idTodo);
      newTodo.splice(todoIndex, 1);

      return { ...state, todo: newTodo };
    }
    default:
      return state;
  }
};

export default todoReducer;
