export const fetchTodos = () => {
  $.ajax({
    mehtod: 'GET',
    url: '/api/todos'
  })
}
