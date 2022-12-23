<script setup lang="ts">
const { todos } = useTodo();
</script>

<template>
  <div :class="$style.todo__list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />

    <div :class="$style.img__container" v-if="todos.length === 0">
      <h2>No task left</h2>
      <img src="~/assets/images/todo.png" alt="To Do image">
    </div>
  </div>
</template>


<style lang="scss" module>
.todo__list {
  margin-top: 2rem;
  display: flex;

  flex-direction: column;
  gap: 1rem;
}

.img__container {
  width: 50%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  img {
    filter: opacity(0.5);
  }
}
</style>
