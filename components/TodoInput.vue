<script setup lang="ts">
const { todos, addTodo } = useTodo()
const newTodo = ref('')

const addTodoWrapper = () => {
  if (!newTodo.value) {
    alert('Please enter a todo')
    return
  }

  addTodo({
    id: todos.value.length + 1,
    title: newTodo.value,
    completed: false,
  })

  newTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodoWrapper" :class="$style.todo__input">
    <input type="text" placeholder="Add a new todo" v-model="newTodo" />
    <button type="submit">Add</button>
  </form>
</template>


<style lang="scss" module>
.todo__input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
  }
}
</style>
