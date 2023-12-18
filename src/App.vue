<template>
  <div id="app" :class="isLight ? 'light' : 'dark'">
    <AppHeader />
    <main class="todo__container">
      <TodoInput />
      <TodoList v-if="todosAllCnt" />
      <!-- <section v-else class="todo__placeholder">No Items</section> -->
      <div class="todo__filters" v-if="todosAllCnt && breakpoint === 'sm'">
        <Filters />
      </div>
      <span class="todo__instruction" v-if="todosAllCnt"
        >Drag and drop to reorder list</span
      >
    </main>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./components/Header.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Filters from "./components/Filters.vue";

import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import useThemeStore from "./stores/theme";
import useTodosStore from "@/stores/todos";
import useBreakpoints from "@/utils/useBreakpoints";

const themeStore = useThemeStore();
const todosStore = useTodosStore();

const isLight = computed((): boolean => {
  return themeStore.isLight;
});
const { todosAllCnt } = storeToRefs(todosStore);

const { breakpoint } = useBreakpoints();
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.todo {
  &__container {
    z-index: 1;
    width: 54rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: $breakpoint-sm) {
      width: 32rem;
      margin: 0 auto;
    }
  }

  &__filters {
    z-index: 1;
    width: 100%;
    height: 6.4rem;
    border-radius: 0.5rem;
    background-color: var(--color-element);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  &__instruction {
    color: var(--color-text-secondary);
    font-size: 1.6rem;
  }

  // &__placeholder {
  //   z-index: 1;
  //   width: 100%;
  //   height: 19.2rem;
  //   margin: 4.8rem 0;
  //   border-radius: 0.5rem;
  //   font-size: 1.6rem;
  //   color: var(--color-text-secondary);
  //   background-color: var(--color-element);
  //   box-shadow: var(--box-shadow);

  //   display: grid;
  //   place-items: center;
  // }
}
</style>
