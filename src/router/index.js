import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    meta: {
      layout: 'blank'
    },
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
});

export default router;