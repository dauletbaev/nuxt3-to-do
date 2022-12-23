<script setup lang="ts">
defineProps<{
  todo: Todo
  isOpen: boolean
}>()

const { toggleTodo, removeTodo } = useTodo()
</script>

<template>
  <div v-if="isOpen" :class="$style.todo__item__menu">
    <button @click="toggleTodo(todo.id)">
      <IconsCheck />
      Mark as {{ todo.completed ? 'uncompleted' : 'completed' }}
    </button>

    <button @click="removeTodo(todo.id)">
      <IconsTrash />
      Delete
    </button>
  </div>
</template>


<style lang="scss" module>
.todo__item__menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;

  margin-top: 5px;
  border-radius: 10px;

  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  button {
    text-align: left;
    vertical-align: middle;
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0.5rem;

    &:first-child {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: salmon;
    }
  }

  button:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
