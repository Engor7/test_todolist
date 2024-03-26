import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    selectedTask: null,
  }),
  getters: {
    filteredTasks: state => {
      return date => state.tasks.filter(task => task.date === date);
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    },
    selectTask(taskId) {
      this.selectedTask = this.tasks.find(task => task.id === taskId);
    },
    clearSelectedTask() {
      this.selectedTask = null;
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
});
