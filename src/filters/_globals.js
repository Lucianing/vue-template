/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */

import Vue from 'vue'
import * as filters from './index'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
