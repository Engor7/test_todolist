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
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 20px 20px #0000000d;
  border: 2px solid #dadada8c;
}
</style>
