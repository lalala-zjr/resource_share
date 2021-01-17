import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/register'
import main from '@/pages/main'
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
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '*',
      name: 'NotF',
      component: NotF
    }
  ]
})
