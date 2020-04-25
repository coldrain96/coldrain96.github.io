import Router from 'vue-router'
import About from '../pages/About'
import Facts from '../pages/Facts'
import Projects from '../pages/Projects'
import Contacts from '../pages/Contacts'

export default new Router({
  routes: [
    {
      path: '',
      component: About
    },
    {
      path: '/facts',
      component: Facts
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/contacts',
      component: Contacts
    },
  ],
  mode: 'history'
})
