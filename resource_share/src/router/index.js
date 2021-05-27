import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/register'
import index from '@/pages/index'
import course from '@/pages/course'
import comInformation from '@/pages/comInformation'
import communicate from '@/pages/communicate/communicate.vue'
import math from '../pages/math/math.vue'
import english from '../pages/english/english.vue'
import policy from '../pages/policy/policy.vue'
import person from '../pages/person'
import videopic from '../pages/math/videopic/videopic.vue'
// import videopicE from '@/pages/english/videopicE/videopicE.vue'
// import videopicP from '../pages/policy/videopicP/videopicP.vue'
import naver from '../components/naver/naver.vue'
import com from '@/pages/communicate/com/com.vue'
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
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/comInformation/:id',
      name: 'comInformation',
      component: comInformation
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/communicate',
      name: 'communicate',
      component: communicate,
      children: [
        {
          path: '/com',
          name: 'com',
          component: com
        }]
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
      path: '/english',
      name: 'english',
      component: english
      // children:[
      //   {
      //     path: '/videopicE',
      //     name: 'videopicE',
      //     component: videopicE
      //   }
      // ]
    },
    {
      path: '/policy',
      name: 'policy',
      component: policy
      // children:[
      //   {
      //     path: '/videopicP',
      //     name: 'videopicP',
      //     component: videopicP
      //   }
      // ]
    },
    {
      path: '*',
      name: 'NotF',
      component: NotF
    }
  ]
})
