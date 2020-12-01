import Vue from 'vue'
import Vuex from 'vuex'
import rasw from '../rasw/rasw.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rasw
  },
  getters: {
    getTopicKeys: state => Object.keys(state.rasw),
    getTopic: state => key => state.rasw[key],
    getSubtopic: state => (topic, subtopic) => {
      return state.rasw[topic][subtopic]
    }
  }
})
