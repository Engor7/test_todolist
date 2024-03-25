<script setup>
import MainNav from '@/components/header/MainNav.vue';
</script>

<template>
  <div class="main-app">
    <MainNav />
    <router-view />
  </div>
</template>

<style lang="scss">
.main-app {
  max-width: 560px;
  margin: 60px auto;
  background: #f4f4f6;
  padding: 15px;
  border-radius: 15px;
}
</style>
