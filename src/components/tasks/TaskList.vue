<script setup>
import { ref, computed } from 'vue';
import { useTasksStore } from '@/stores/tasksStore.js';
import AddTaskButton from './AddTaskButton.vue';
import TaskForm from './TaskForm.vue';
import TaskItem from './TaskItem.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';

const taskStore = useTasksStore();
const isAddTaskFormVisible = ref(false);
const filterDate = ref('');
const selectedTaskId = ref(null);

const showAddTaskForm = () => {
  isAddTaskFormVisible.value = true;
};

const closeAddTaskForm = () => {
  isAddTaskFormVisible.value = false;
};

const filteredTasks = computed(() => {
  return filterDate.value
    ? taskStore.tasks.filter(task => task.date === filterDate.value)
    : taskStore.tasks;
});

const selectedTask = computed(() => {
  return taskStore.tasks.find(task => task.id === selectedTaskId.value);
});

const selectTask = id => {
  selectedTaskId.value = id;
};

const deselectTask = () => {
  selectedTaskId.value = null;
};

const resetFilter = () => {
  filterDate.value = '';
  selectedTaskId.value = null;
};
</script>

<template>
  <div class="task-list">
    <div class="task-list__top">
      <DefaultButton
        v-if="filterDate"
        title="Назад"
        icon-name="IconArrowLeft"
        icon-size="13"
        @click="resetFilter"
      />
      <input
        class="task-list__filter"
        type="date"
        v-model="filterDate"
        @input="filterTasks"
      />
      <AddTaskButton @addTask="showAddTaskForm" />
    </div>
    <TaskForm v-if="isAddTaskFormVisible" @closeForm="closeAddTaskForm" />
    <p
      v-if="filterDate && filteredTasks.length === 0"
      class="task-list__message"
    >
      На выбранную дату задач нет. Попробуйте другую дату или добавьте новую
      задачу.
    </p>
    <p
      v-else-if="!filterDate && taskStore.tasks.length === 0"
      class="task-list__message"
    >
      Задач пока нет.
    </p>
    <div class="task-list__tasks">
      <TaskItem
        v-if="selectedTask"
        :task="selectedTask"
        :isSelected="true"
        @deselect="deselectTask"
      />
      <TaskItem
        v-else
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        :isSelected="false"
        @deselect="selectTask"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-list {
  &__top {
    display: flex;
    gap: 15px;
    justify-content: space-between;
    border: 1px solid #e3e3e3;
    border-left: none;
    border-right: none;
    padding: 10px 15px;
    margin: 0 -15px 15px -15px;
  }

  &__filter {
    border-radius: 8px;
    border: 1px solid #bbb;
    padding: 0 5px;
    margin-right: auto;
  }

  &__tasks {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__message {
    padding: 15px;
    line-height: 160%;
    text-align: center;
    border-radius: 8px;
  }
}
</style>
