/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

export default store
