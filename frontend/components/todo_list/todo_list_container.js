import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// const mapDispatchToProps = dispatch => ({
//   requestTodos: () => dispatch(fetchTodos()),
//   createTodo: todo => dispatch(createTodo(todo)),
//   updateTodo: todo => dispatch(updateTodo(todo))
// });
