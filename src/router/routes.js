/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */
import layout from '@/layout/default'

export default [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  }
]
