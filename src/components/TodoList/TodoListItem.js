import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction, doneTodoAction } from '../../actions/actionsCreate';
import CancelBoxIcon from 'mdi-react/CancelBoxIcon';

import styles from './TodoListItem.module.scss';

function TodoListItem (props) {
  const {
    todo: { id, name, isDone },
    chekTodo,
    delTodo,
  } = props;

  const hendleChange = () => {
    chekTodo(id, { isDone: !isDone });
  };

  const hendleDelete = () => {
    delTodo(id);
  };

  return (
    <li className={styles.list}>
      <div className={styles.listChek}>
        <input
          className={styles.listInfo}
          type='checkbox'
          checked={isDone}
          onChange={hendleChange}
        />
        <span className={isDone ? styles.listDone : styles.listInfo}>
          {name}
        </span>
      </div>

      <CancelBoxIcon
        className={styles.listIcon}
        onClick={hendleDelete}
        color='#3f72af'
      />
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  chekTodo: (id, values) => {
    dispatch(doneTodoAction(id, values));
  },
  delTodo: id => {
    dispatch(deleteTodoAction(id));
  },
});

export default connect(null, mapDispatchToProps)(TodoListItem);
