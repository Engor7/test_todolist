<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const localDate = ref(props.modelValue);

watch(localDate, newValue => {
  emit('update:modelValue', newValue);
});

function updateFilter() {
  emit('update:modelValue', localDate.value);
}
</script>

<template>
  <input type="date" v-model="localDate" @input="updateFilter" />
</template>
