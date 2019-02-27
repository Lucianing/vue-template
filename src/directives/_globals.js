/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */

import Vue from 'vue'
import * as directives from './index'

Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))
