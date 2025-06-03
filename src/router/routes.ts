import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage/LandingPage.vue') },
      { path: 'company', component: () => import('pages/CompanyPage/CompanyPage.vue') }
    ] },
  { path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue') }
];

export default routes;
