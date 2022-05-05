import React from 'react';
import { connect } from 'react-redux';
import { checkedTodo, deleteTodo } from '../../actions/actionsCreate';
import CancelBoxIcon from 'mdi-react/CancelBoxIcon';

import styles from './TodoListItem.module.scss';

function TodoListItem (props) {
  console.log('propslist', props);
  const {
    todo: { id, name, isChek },
    chekTodo,
    delTodo,
  } = props;

  const hendleChange = () => {
    chekTodo({ isChek: !isChek }, id);
  };

  const hendleDelete = () => {
    delTodo(id);
  };

  return (
    <li className={styles.list}>
      <div className={styles.listChek}>
        <input
          className={styles.listCheckbox}
          type='checkbox'
          checked={isChek}
          onChange={hendleChange}
        />
        <span className={styles.listInfo}>{name}</span>
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
  chekTodo: (values, id) => {
    dispatch(checkedTodo(values, id));
  },
  delTodo: id => {
    dispatch(deleteTodo(id));
  },
});

export default connect(null, mapDispatchToProps)(TodoListItem);
