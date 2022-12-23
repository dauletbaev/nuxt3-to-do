export const useTodo = () => {
  // its local storage but reactive
  const todos = useLocalStorage<Todo[]>('todo', () => [])

  const addTodo = (todo: Todo) => {
    todos.value.push(todo)
  }

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  const toggleTodo = (id: number) => {
    todos.value = todos.value.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }

  const uncompletedTodos = computed(() => {
    return todos.value.filter((todo) => !todo.completed)
  })

  const completedTodos = computed(() => {
    return todos.value.filter((todo) => todo.completed)
  })

  const clearCompleted = () => {
    todos.value = todos.value.filter((todo) => !todo.completed)
  }

  return {
    todos,
    completedTodos,
    uncompletedTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    clearCompleted,
  }
}
