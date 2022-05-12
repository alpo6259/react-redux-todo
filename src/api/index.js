import { v4 as uuidv4 } from 'uuid';

const todosDB = [
  {
    id: uuidv4(),
    name: 'test get valueDB1',
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'test get valueDB2',
    isDone: true,
  },
  {
    id: uuidv4(),
    name: 'test get valueDB3',
    isDone: false,
  },
];

class TodoDB {
  constructor (arr) {
    this.todo = [...arr];
  }

  createTodo (values) {
    this.todo.push({ ...values, id: uuidv4(), isDone: false });
    return this.todo[this.todo.length - 1];
  }

  getTodos () {
    return [...this.todo];
  }

  deleteTodo (id) {
    const TodoIndex = this.todo.findIndex(todo => todo.id === id);
    this.todo.splice(TodoIndex, 1);
  }

  updateTodo (id, values) {
    const TodoIndex = this.todo.findIndex(todo => todo.id === id);
    this.todo[TodoIndex] = { ...this.todo[TodoIndex], ...values };
    return this.todo[TodoIndex];
  }
}

const todoDbInstance = new TodoDB(todosDB);

export const createTodo = v => todoDbInstance.createTodo(v);

export const getTodos = () => todoDbInstance.getTodos();

export const deleteTodo = id => todoDbInstance.deleteTodo(id);

export const updateTodo = (id, values) => todoDbInstance.updateTodo(id, values);
