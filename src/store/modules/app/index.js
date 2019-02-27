/**
 * @file:   文件描述
 */

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import initState from './state'

export default {
  namespaced: true,
  mutations: {
    ...mutations,
    'RESET': (state) => {
      Object.keys(state).forEach(key => {
        Object.assign(state[key], initState[key])
      })
    }
  },
  actions,
  getters,
  state: {
    ...Object.assign({}, initState)
  }
}
