import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage/LandingPage.vue') },
      { path: 'about', component: () => import('pages/AboutUsPage/AboutUsPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage/ContactPage.vue') },
      { path: 'events', component: () => import('pages/EventsPage/EventsPage.vue') },
    ],
  },
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') },
];

export default routes;
