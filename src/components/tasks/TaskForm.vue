<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasksStore.js';

const emit = defineEmits(['closeForm']);
const taskStore = useTasksStore();

const today = new Date().toISOString().split('T')[0];

const newTask = ref({
  title: '',
  date: today,
  description: '',
});

const submitTask = () => {
  if (!newTask.value.title || !newTask.value.date) {
    alert('Название и дата задачи обязательны.');
    return;
  }
  taskStore.addTask({ ...newTask.value, id: Date.now() });
  emitCloseForm();
};

const emitCloseForm = () => {
  emit('closeForm');
};
</script>

<template>
  <div class="task-form">
    <input v-model="newTask.title" placeholder="Название задачи" />
    <input v-model="newTask.date" type="date" placeholder="Дата" />
    <textarea v-model="newTask.description" placeholder="Описание"></textarea>
    <button class="task-form__button-create" @click="submitTask">
      Создать задачу
    </button>
    <button class="task-form__button-cancel" @click="emitCloseForm">
      Отмена
    </button>
  </div>
</template>

<style scoped lang="scss">
.task-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: -15px -15px 15px -15px;
  padding: 30px 15px;
  background: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  input,
  textarea {
    width: 100%;
  }

  button {
    flex: 1;
    cursor: pointer;
  }

  input,
  textarea,
  button {
    border-radius: 8px;
    height: 35px;
    border: 1px solid #bbb;
    padding: 0 10px;
  }

  textarea {
    height: 75px;
    padding-top: 10px;
  }

  &__button-create {
    background: #588aef;
    color: #fff;
    border: none !important;
  }

  &__button-cancel {
    background: #dedede;
  }
}
</style>
