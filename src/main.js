import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TopicList from './components/TopicList'
import TopicSublist from './components/TopicSublist'
import TopicSublistItem from './components/TopicSublistItem'

Vue.config.productionTip = false
Vue.component('TopicList', TopicList)
Vue.component('TopicSublist', TopicSublist)
Vue.component('TopicSublistItem', TopicSublistItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
