import VueRouter from 'vue-router'

import Login from '../view/Login.vue'
import Menu from '../view/Menu.vue'
import MoneyManagement from '../view/MoneyManagement.vue'
import CodeManagement from '../view/CodeManagement.vue'
import Search from '../view/Search.vue'
import HistoryRecord from '../view/HistoryRecord.vue'
import CodeRecord from '../view/CodeRecord.vue'
import MoneyManagementNext from '../view/MoneyManagementNext.vue'
import MoneyManagementSuc from '../view/MoneyManagementSuc.vue'
import CodeMangementNext from '../view/CodeMangementNext.vue'
import CodeManagementSuc from '../view/CodeManagementSuc.vue'

const routes = [
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login

    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/MoneyManagement',
        name: 'MoneyManagement',
        component: MoneyManagement
    },
    {
        path: '/CodeManagement',
        name: 'CodeManagement',
        component: CodeManagement,
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search,
    },
    {
        path: '/HistoryRecord',
        name: 'HistoryRecord',
        component: HistoryRecord,
    },
    {
        path: '/CodeRecord',
        name: "CodeRecord",
        component: CodeRecord,
    },
    {
        path: '/MoneyManagementNext',
        name: "MoneyManagementNext",
        component: MoneyManagementNext,
    },
    {
        path: '/MoneyManagementSuc',
        name: "MoneyManagementSuc",
        component: MoneyManagementSuc,
    },
    {
        path: '/CodeMangementNext',
        name: "CodeMangementNext",
        component: CodeMangementNext,
    },
    {
        path: '/CodeManagementSuc',
        name: "CodeManagementSuc",
        component: CodeManagementSuc,
    }
]

const router = new VueRouter({
    base: '/static/web/chongzhi/',
    // mode: 'history',
    routes
})

export default router 