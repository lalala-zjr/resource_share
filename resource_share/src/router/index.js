import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/register'
import index from '@/pages/index'
import communicate from '@/pages/communicate'
import math from '../pages/math/math.vue'
import person from '../pages/person'
import videopic from '../components/videopic/videopic.vue'
import naver from '../components/naver/naver.vue'
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
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/communicate',
      name: 'communicate',
      component: communicate
    },
    {
      path: '/naver',
      name: 'naver',
      component: naver
    },
    {
      path: '/math',
      name: 'math',
      component: math,
      children: [
        {
          path: '/videopic',
          name: 'videopic',
          component: videopic
        }
      ]
    },
    {
      path: '*',
      name: 'NotF',
      component: NotF
    }
  ]
})
