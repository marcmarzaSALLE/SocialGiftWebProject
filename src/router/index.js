import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/LoginView.vue'
import MyListView from '../views/MyListsView.vue'
import MyUser from '../views/MyUserView.vue'
import EditUser from '../views/EditUserView.vue'
import EditPasswordView from "../views/EditPasswordView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import Messages from '../views/MessagesView.vue'
import friend from "../views/FriendUserView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },{
            path: '/MyLists:id',
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
        },{
            path: '/EditPassword',
            name: 'EditPassword',
            component: EditPasswordView
        },{
            path: '/Login',
            name: 'Login',
            component: LoginView
        },{
            path: '/Register',
            name: 'Register',
            component: RegisterView
        },{
            path: '/Messages',
            name: 'Messages',
            component: Messages
        },{
            path: '/friend/:id',
            name: 'friend',
            component: friend
        }

    ]
})

export default router
