<script setup lang="ts">
useHead({
  title: 'To Do List',
  meta: [
    {
      name: 'description',
      content: 'To Do List',
    },
  ],
})
</script>

<template>
  <div :class="$style.todo">
    <h1 :class="$style.title">To Do List</h1>

    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<style lang="scss" module>
.todo {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
