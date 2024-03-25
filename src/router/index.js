import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import AppView from '@/views/AppView.vue';
import AboutView from '@/views/AboutView.vue';
import ErrorLayout from '@/layouts/ErrorLayout.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: AppView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorLayout,
    children: [
      {
        path: '',
        name: 'notfound',
        component: NotFoundView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
