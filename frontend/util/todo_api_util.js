export const fetchTodos = () => {
  $.ajax({
    mehtod: 'GET',
    url: '/api/todos'
  })
}

// Inside the todo_list_container.js,
// instead of passing in receiveTodo in
// mapDispatchToProps, pass in createTodo and
// pass it through to TodoForm.
// Inside the TodoForm component,
// instead of receiveTodo, call createTodo.
