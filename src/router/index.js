import Router from 'vue-router'
import About from '../pages/About'
import Facts from '../pages/Facts'
import Projects from '../pages/Projects'
import Contacts from '../pages/Contacts'

export default new Router({
  routes: [
    {
      path: '/',
      component: About,
      name: 'Обо мне'
    },
    {
      path: '/facts',
      component: Facts,
      name: 'Факты'
    },
    {
      path: '/projects',
      component: Projects,
      name: 'Сверстал'
    },
    {
      path: '/contacts',
      component: Contacts,
      name: 'Контакты'
    },
  ],
  mode: 'history'
})
