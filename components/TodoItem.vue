<script setup lang="ts">
defineProps<{
  todo: Todo
}>()

const todoEl = ref<HTMLDivElement>()
const isMenuOpen = ref(false)
const { toggleTodo } = useTodo()

const toggleMenu = (value?: boolean) => {
  isMenuOpen.value = value ?? !isMenuOpen.value
}


onClickOutside(todoEl, () => toggleMenu(false))
</script>

<template>
  <div ref="todoEl" :class="$style.todo__item">
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" />

    <span :class="[$style.todo__item__text, { [$style.completed]: todo.completed }]">
      {{ todo.title }}
    </span>

    <div :class="[$style.todo__item__dots, { [$style.active]: isMenuOpen }]" @click="toggleMenu()">
      <IconsVerticalDots />
    </div>

    <DropMenu :todo="todo" :isOpen="isMenuOpen" />
  </div>
</template>

<style lang="scss" module>
.todo__item {
  position: relative;

  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    accent-color: #000;
  }
}

.todo__item__text {
  flex: 1;
  margin-left: 1rem;
  font-size: 1.2rem;

  &.completed {
    text-decoration: line-through;
  }
}

.todo__item__dots {
  padding: 0.5rem;
  border-radius: 10px;

  &.active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
