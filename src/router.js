import VueRouter from "vue-router"
import Vue from "vue"
import main from "./components/main";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
        path:"/",
        name:"main",
        component:main,

    }]
})
