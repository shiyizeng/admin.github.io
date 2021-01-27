import Vue from 'vue'
import VueRouter from 'vue-router'
import  Dashboard  from '../components/Dashboard.vue'
import  Rest from '../components/Rest.vue'
import  Personal from '../components/Personal.vue'
import pp from '../components/pp.vue'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.use(VueRouter)



let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(path){
  return originalPush.call(this,path).catch(err=>{
    console.log(err);
  })
}
const routes = [
  {
    path: '/rest',
    name: 'Rest',
    component:Rest
    // component:  ()=>import('../components/Rest.vue')
  },
  {
    path: '/pp',
    name: 'pp',
    component:pp
    // component:  ()=>import('../components/pp.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component:Personal
  
  },
  {
    path: '/dashboard',
      name: 'Dashboard',
      component:Dashboard,
      children:[
        {
          path: '/emalist',
          name: 'EMAlist',
          component: ()=>import('../components/EMAlist.vue')
        },
        {
          path: '/hrlist',
          name: 'HRlist',
          component: ()=>import('../components/HRlist.vue')
        },
        {
          path: '/oalist',
          name: 'OAlist',
          component: ()=>import('../components/OAlist.vue')
        },
        {
          path: '/srmlist',
          name: 'SRMlist',
          component: ()=>import('../components/SRMlist.vue')
        },
      ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
