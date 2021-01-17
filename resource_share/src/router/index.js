import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/register'
import index from '@/pages/index'
import NotF from '@/pages/NotF'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '*',
      name: 'NotF',
      component: NotF
    }
  ]
})
