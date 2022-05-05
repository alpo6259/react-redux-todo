import Todo from './components/Todo';
import TodoList from './components/TodoList';
import styles from './styles/App.module.scss';

function App () {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do</h1>
      <section className={styles.articleSections}>
        <Todo />
      </section>
      <section className={styles.articleSections}>
        <TodoList />
      </section>
    </article>
  );
}

export default App;
