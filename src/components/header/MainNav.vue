<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const navItems = ref([
  {
    title: 'To-do List',
    link: '/',
  },
  {
    title: 'About app',
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
    border: 1px solid #bebebe;
    padding: 2px;
    border-radius: 8px;
  }

  &__item {
    border-radius: 5px;

    a {
      display: inline-block;
      text-decoration: none;
      color: #000;
      padding: 5px 10px;
    }

    &_active {
      background: #494949;

      a {
        color: #fff;
      }
    }
  }
}
</style>
