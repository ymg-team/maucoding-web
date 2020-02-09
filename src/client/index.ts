import Vue from "vue"
import Vuex from "vuex"
import Meta from "vue-meta"
import VueRouter from "vue-router"
import routes from "./routes"
import storeModules from "./vuex/modules"

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

// initial router
export const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// initial store
export const store = new Vuex.Store({
  modules: storeModules
})

// initial app
export const app = new Vue({
  router,
  store,
  template: "<router-view />"
})

app.$mount("#app")
