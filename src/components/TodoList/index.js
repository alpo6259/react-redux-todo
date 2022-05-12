import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodoAction } from '../../actions/actionsCreate';
import TodoListItem from './TodoListItem';
import styles from './TodoListItem.module.scss';

function TodoList (props) {
  const { todo, isFatching, error, getTodos } = props;

  useEffect(() => {
    getTodos();
  }, []);

  const mapTodoList = v => <TodoListItem key={v.id} todo={v} />;

  return (
    <>
      {isFatching && <div>load...</div>}
      {error && <div>error!!!</div>}
      {!isFatching && !error && (
        <ul className={styles.ul}>{todo.map(mapTodoList)}</ul>
      )}
    </>
  );
}

const mapStateToProps = ({ todoData }) => {
  return todoData;
};

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodoAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
