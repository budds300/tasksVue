import{createRouter,createWebHistory} from 'vue-router'
import AbouT from '../views/about.vue'
import HomE from '../views/Home.vue'

const routes=[
    {
        path:'/',
        name:'Home',
        component:HomE
    },
    {
        path:'/about',
        name:'About',
        component:AbouT
    },
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),routes,
})

export default router