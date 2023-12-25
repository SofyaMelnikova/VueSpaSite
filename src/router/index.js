import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/main-page/MainPage.vue')
    },
    {
      path: '/directors',
      name: 'directors',
      component: () => import('@/pages/director-page/DirectorsListPage.vue')
    },
    {
      path: '/director/:id/:obj',
      name: 'director',
      component: () => import('@/pages/director-page/DirectorPage.vue')
    },
    {
      path: '/film/:id/:obj',
      name: 'film',
      component: () => import('@/pages/film-page/FilmPage.vue')
    }
  ]
})

export default router
