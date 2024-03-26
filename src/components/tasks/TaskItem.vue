<script setup>
import { ref } from 'vue';
import { useTasksStore } from '@/stores/tasksStore.js';
import BaseIcon from '@/components/bases/BaseIcon.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';

const props = defineProps({
  task: Object,
  isSelected: Boolean,
});
const emit = defineEmits(['deselect']);
const confirmDelete = ref(false);

const store = useTasksStore();

const toggleSelection = () => {
  if (!props.isSelected) {
    emit('deselect', props.task.id);
  }
};

const startDeleteProcess = event => {
  event.stopPropagation();
  confirmDelete.value = true;
};

const deleteThisTask = () => {
  store.deleteTask(props.task.id);
  confirmDelete.value = false;
  if (props.isSelected) {
    emit('deselect');
  }
};

const cancelDelete = event => {
  event.stopPropagation();
  confirmDelete.value = false;
};
</script>

<template>
  <div class="task-item" :class="{ 'task-item_active-delete': confirmDelete }">
    <div @click="toggleSelection" class="task-item__info">
      <h3>{{ task.title }}</h3>
      <span>{{ task.date }}</span>
    </div>
    <div
      class="task-item__delete"
      :class="{ 'task-item__delete_active': confirmDelete }"
    >
      <button v-if="!confirmDelete" @click.stop="startDeleteProcess">
        <span>Удалить</span>
        <BaseIcon name="IconTrash" size="16" />
      </button>
      <div v-else class="task-item__confirm-delete">
        <span>Удалить задачу?</span>
        <button
          class="task-item__confirm-delete-button-yes"
          @click.stop="deleteThisTask"
        >
          Да
        </button>
        <button
          class="task-item__confirm-delete-button-no"
          @click.stop="cancelDelete"
        >
          Нет
        </button>
      </div>
    </div>
    <div v-if="isSelected" class="task-item__details">
      <p>{{ task.description }}</p>
      <DefaultButton
        title="К списку"
        icon-name="IconArrowLeft"
        icon-size="13"
        class="task-item__back-to-list"
        @click.stop="$emit('deselect')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-item {
  position: relative;
  background: #f7f7f8;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 20px;
  transition: transform 0.3s;
  cursor: pointer;

  &_active-delete {
    outline: 2px solid #f55;
  }

  &__info {
    padding-right: 87px;

    h3 {
      margin-bottom: 5px;
    }

    span {
      font-size: 12px;
      opacity: 0.7;
    }
  }

  &__delete {
    display: none;
    top: 6px;
    right: 6px;
    position: absolute;

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      background: #f55;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      padding: 5px 10px;

      svg {
        stroke: #fff;
      }
    }

    &_active {
      display: block;
    }
  }

  &__confirm-delete {
    display: flex;
    gap: 5px;
    align-items: center;
    background: #333;
    padding: 3px;
    border-radius: 20px;
    box-shadow: 0 5px 18px #b3b3b3;

    span {
      display: inline-block;
      padding: 0 8px;
      color: #fff;
    }
  }

  &__confirm-delete-button-no {
    background: #fff !important;
    color: #333 !important;
  }

  &__details {
    p {
      margin: 18px 0;
    }

    button {
      svg {
        stroke: #000;
      }
    }
  }

  &__back-to-list {
    height: 40px;
  }

  &:hover {
    transform: scale(1.01);

    .task-item__delete {
      display: block;
    }
  }
}
</style>
