<script setup lang="ts">
const { completedTodos, uncompletedTodos, clearCompleted } = useTodo();
</script>

<template>
  <div :class="$style.todo__footer">
    <div v-show="uncompletedTodos.length > 0" :class="$style.left">
      <span><strong>{{ uncompletedTodos.length }}</strong> {{ uncompletedTodos.length === 1 ? 'item' : 'items' }} left
        to do</span>
    </div>
    <div v-show="completedTodos.length > 0" :class="$style.right">
      <button @click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<style lang="scss" module>
.todo__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  .left {
    font-size: 1.1rem;
  }

  .right button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;

  }
}

@media (max-width: 768px) {
  .todo__footer {
    flex-direction: column;
    gap: 0.5rem;

    .left {
      font-size: 1rem;
    }

    .right button {
      padding: 0.5rem 0.75rem;
    }
  }
}
</style>
