import { defineStore } from "pinia";

import { v4 as uuidv4 } from "uuid";

interface Todo {
  id?: string;
  text: string;
  done: boolean;
}

const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [] as Todo[],
      filter: "all",
    };
  },
  getters: {
    todosDisplayed: (state): Todo[] => {
      if (state.filter === "active") {
        return state.todos.filter((t) => !t.done);
      } else if (state.filter === "completed") {
        return state.todos.filter((t) => t.done);
      }
      return state.todos;
    },
    todosActiveCnt: (state): number => {
      const actives = state.todos.filter((t) => !t.done);
      return actives.length;
    },
    todosCompletedCnt: (state): number => {
      const cmps = state.todos.filter((t) => t.done);
      return cmps.length;
    },
    todosAllCnt: (state): number => {
      return state.todos.length;
    },
  },
  actions: {
    addTodo(todo: Todo): void {
      const id = uuidv4();
      this.todos.unshift({ ...todo, id });
    },
    removeTodo(todoId: string | undefined): void {
      if (!todoId) {
        return;
      }
      const index = this.todos.findIndex((t) => t.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    removeDoneTodos(): void {
      const dones = this.todos.filter((t) => t.done);
      dones.forEach((t: Todo) => {
        this.removeTodo(t.id);
      });
    },
    updateTodo(todoId: string, todo: Todo): void {
      const index = this.todos.findIndex((t) => t.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1, { ...todo, ...this.todos[index] });
      }
    },
    setFilter(filter: string): void {
      this.filter = filter;
    },
  },
});

export default useTodosStore;
