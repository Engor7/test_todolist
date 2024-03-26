<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const navItems = ref([
  {
    title: 'Tasks',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
]);

const route = useRoute();
</script>

<template>
  <div class="main-nav">
    <ul>
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="main-nav__item"
        :class="{ 'main-nav__item_active': route.path === item.link }"
      >
        <router-link :to="`${item.link}`">{{ item.title }} </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.main-nav {
  margin-bottom: 15px;

  ul {
    width: max-content;
    display: flex;
    gap: 10px;
    list-style: none;
    background: #f1f2f5;
    padding: 3px;
    border-radius: 10px;
  }

  &__item {
    border-radius: 8px;

    a {
      display: inline-block;
      text-decoration: none;
      color: #838383;
      padding: 5px 10px;
    }

    &_active {
      background: #fff;

      a {
        color: #000;
      }
    }
  }
}
</style>
