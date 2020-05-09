import Vue from 'vue'
import Vuex from 'vuex'
import about from './about/'
import contacts from './contacts/'
import facts from './facts/'
import projects from './projects/'

Vue.use(Vuex)

const modules = {
  about,
  contacts,
  facts,
  projects,
}

export default new Vuex.Store({
  modules,
})
