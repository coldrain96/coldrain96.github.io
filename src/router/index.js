import Router from 'vue-router'

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/About'),
      name: 'Обо мне'
    },
    {
      path: '/facts',
      component: () => import('../pages/Facts'),
      name: 'Факты'
    },
    {
      path: '/projects',
      component: () => import('../pages/Projects'),
      name: 'Сверстал'
    },
    {
      path: '/contacts',
      component: () => import('../pages/Contacts'),
      name: 'Контакты'
    },
  ],
  mode: 'hash'
})
