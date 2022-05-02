// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory  } from 'vue-router'

// ルーティングの設定
// TODO: ログイン状態によってrootページを出し分け
const routes = [
  {
    path: '/Start',
    name: 'Start',
    component: () => import('../views/Start.vue'),
  },
  {
    path: '/',
    name: 'AllModules',
    component: () => import('../views/AllModules.vue')
  },
  {
    path: '/my-garden',
    name: 'MyGarden',
    component: () => import('../views/MyGarden.vue')
  },
  {
    path: '/profile-registration',
    name: 'ProfileRegistration',
    component: () => import('../views/ProfileRegistration.vue'),
  },
  {
    path: '/user-policy',
    name: 'UserPolicy',
    component: () => import('../views/UserPolicy.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
  },
  {
    path: '/flower-select',
    name: 'FlowerSelect',
    component: () => import('../views/FlowerSelect.vue'),
  },
  {
    path: '/shipping-list',
    name: 'ShippingList',
    component: () => import('../views/ShippingList.vue'),
  },
  {
    path: '/shipping-register',
    name: 'ShippingRegister',
    component: () => import('../views/ShippingRegister.vue'),
  },
  {
    path: '/shipping-select',
    name: 'ShippingSelect',
    component: () => import('../views/ShippingSelect.vue'),
  },
  {
    path: '/nurturing',
    name: 'Nurturing',
    component: () => import('../views/Nurturing.vue'),
  },
  {
    path: '/exchange-history',
    name: 'ExchangeHistory',
    component: () => import('../views/ExchangeHistory.vue'),
  },
  {
    path: '/user-info',
    name: 'UserInfo',
    component: () => import('../views/UserInfo.vue'),
  },
  {
    path: '/unsubscribe',
    name: 'Unsubscribe',
    component: () => import('../views/Unsubscribe.vue'),
  },
]

// Vueインスタンスへrouterインスタンスを渡す
// TODO: prodはhash modeのためServer側の設定必要かも
// https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%8F%E3%82%99%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B
const router = createRouter({
  // history: process.env.NODE_ENV !== 'production' ? createWebHistory() : createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
