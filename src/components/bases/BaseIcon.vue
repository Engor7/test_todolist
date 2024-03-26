<script setup>
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
  name: String,
  size: {
    type: Number,
    default: 24,
  },
});

const iconComponent = computed(() =>
  defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`)),
);
</script>

<template>
  <component :is="iconComponent" :size="props.size" />
</template>
