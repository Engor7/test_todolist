<script setup>
import BaseIcon from '@/components/bases/BaseIcon.vue';

const props = defineProps({
  title: String,
  iconName: String,
  iconSize: Number,
});
</script>

<template>
  <button class="default-button">
    <BaseIcon :name="props.iconName" :size="props.iconSize" />
    <span v-if="props.title">{{ props.title }}</span>
  </button>
</template>

<style scoped lang="scss">
.default-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  color: #444548;
  background: #ededed;
  transition: all 0.3s;

  svg {
    stroke: #444548;
  }

  &:hover {
    transform: translateX(-3px);
  }
}
</style>
