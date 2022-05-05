import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

import styles from './TodoListItem.module.scss';

function TodoList (props) {
  const { todo } = props;

  const mapTodoList = v => <TodoListItem key={v.id} todo={v} />;

  return <ul className={styles.ul}>{todo.map(mapTodoList)}</ul>;
}

const mapStateToProps = ({ todoData }) => {
  console.log('state', todoData);
  return todoData;
};

export default connect(mapStateToProps)(TodoList);
