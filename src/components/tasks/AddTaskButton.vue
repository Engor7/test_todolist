<script setup>
import BaseIcon from '@/components/bases/BaseIcon.vue';

defineEmits(['addTask']);
</script>

<template>
  <button @click="$emit('addTask')">
    <span>Добавить задачу</span>
    <BaseIcon name="IconPlus" size="16" />
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #507dd7;
  background: #588aef;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #4072d5;
  }

  svg {
    stroke: #fff;
  }
}
</style>
