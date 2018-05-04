import VueRouter from 'vue-router'

import Login from '../view/Login.vue'
import Menu from '../view/Menu.vue'
import MoneyManagement from '../view/MoneyManagement.vue'
import CodeManagement from '../view/CodeManagement.vue'
import Search from '../view/Search.vue'
import HistoryRecord from '../view/HistoryRecord.vue'
import CodeRecord from '../view/CodeRecord.vue'

const routes  = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        component: Login

    },
    {
        path: '/Menu',
        component: Menu
    },
    {
        path: '/MoneyManagement',
        component: MoneyManagement
    },
    {
        path: '/CodeManagement',
        component: CodeManagement,
    },
    {
        path: '/Search',
        component: Search,
    },
    {
        path: '/HistoryRecord',
        component: HistoryRecord,
    },
    {
        path: '/CodeRecord',
        component: CodeRecord,
    }
]

const router = new VueRouter({
    routes
})

export default router 