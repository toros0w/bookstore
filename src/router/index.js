import { createRouter, createWebHashHistory } from 'vue-router'
// import MainTests from '@/views/MainTests.vue'
import IndexPage from '@/views/IndexPage.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import CatalogPage from '@/views/CatalogPage.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import GeneralError from '@/views/GeneralError.vue'
import ErrorNotFound from '@/views/ErrorNotFound.vue'
import SuccessPage from '@/views/SuccessPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/book-info',
      name: 'BookInfo',
      component: ProductDetail
    },
    {
      path: '/catalog',
      name: 'CatalogPage',
      component: CatalogPage
    },
    {
      path: '/favorites',
      name: 'FavoritePage',
      component: FavoritePage
    },
    {
      path: '/error',
      name: 'GeneralError',
      component: GeneralError
    },
    {
      path: '/404',
      name: 'ErrorNotFound',
      component: ErrorNotFound
    },
    {
      path: '/success',
      name: 'SuccessPage',
      component: SuccessPage
    }
    // {
    // path: '/about',
    // name: 'about',
    // component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 };
    }
  }
})

export default router
