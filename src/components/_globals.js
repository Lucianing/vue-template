/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */

import Vue from 'vue'
import '@/assets/icons'
import * as components from './index'

Object.keys(components).forEach(key => Vue.component(key, components[key]))
