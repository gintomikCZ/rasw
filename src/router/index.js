import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Process from '../views/Process.vue'
import Design from '../views/Design.vue'
import ConfigurationCollaboration from '../views/ConfigurationCollaboration.vue'
import ManufacturingIntelligence from '../views/ManufacturingIntelligence.vue'
import Other from '../views/Other.vue'
import Hmi from '../views/Hmi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Design',
    name: 'Design',
    component: Design
  },
  {
    path: '/Process',
    name: 'Process',
    component: Process
  },
  {
    path: '/ManufacturingIntelligence',
    name: 'ManufacturingIntelligence',
    component: ManufacturingIntelligence
  },
  {
    path: '/ConfigurationCollaboration',
    name: '/ConfigurationCollaboration',
    component: ConfigurationCollaboration
  },
  {
    path: '/Hmi',
    name: 'Hmi',
    component: Hmi
  },
  {
    path: '/Other',
    name: 'Other',
    component: Other
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
