import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/MyUserView.vue'
import MyListView from '../views/MyListsView.vue'
import MyUser from '../views/MyUserView.vue'
import EditUser from '../views/EditUserView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }, {
            path: '/MyLists',
            name: 'MyLists',
            component: MyListView
        },{
            path: '/MyUser',
            name: 'MyUser',
            component: MyUser
        },{
            path: '/EditUser',
            name: 'EditUser',
            component: EditUser
        }

]
})

export default router
