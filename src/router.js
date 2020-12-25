import VueRouter from "vue-router"
import Vue from "vue"
import drap from "./components/drap";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            name:"drap",
            component:drap,
        },
        {
            path:'/flex',
            name: '弹性布局',
            component: ()=>import('@/components/flex')
        }
    ]
})
