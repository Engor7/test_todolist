import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    list: '',
  }),
  actions: {},
});
