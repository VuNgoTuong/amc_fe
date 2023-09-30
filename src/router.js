
import { createRouter, createWebHistory } from 'vue-router';
import Admin from './views/admin/Main.vue';
import Login from './views/login/Main.vue';

import Dashboard from './views/admin/pages/Dashboard/index.vue';
import MarketsManager from './views/admin/pages/MarketsManager/index.vue';

import UsersManager from './views/admin/pages/UsersManager/index.vue';
import Permissions from './views/admin/pages/Permissions/index.vue';
import ProjectManager from './views/admin/pages/ProjectManager/index.vue';

// import axios from 'axios';
// import{useMessageStore} from './store'

const routes = [
    {
        path: '/',
        component : Login,
        // redirect: to => {
        //     return { path: '/admin'}
        // },
    },
    {
        path: '/admin',
        component : Admin,
        children: [
            {
                path: '',
                component: Dashboard,
                meta : {
                    title: 'Welcome to Dashboard',
                }
            },
            {
                path: 'users-manager',
                component: UsersManager,
                meta : {
                    title: 'Quản lý người dùng',
                }
            },
            {
                path: 'markets-manager',
                component: MarketsManager,
                meta : {
                    title: 'Quản Lý Tài Sản',
                }
            },
            {
                path: 'permissions',
                component: Permissions,
                meta : {
                    title: 'Phân quyền quản trị',
                }
            },
            {
                path: 'project-manager',
                component: ProjectManager,
                meta : {
                    title: 'Phân quyền quản trị',
                }
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach(async (to, from) => {
//     if(to.path != "/"){
//         const messageStore = useMessageStore();
//         const accessToken = localStorage.getItem('accessToken');
//         const xmppToken = localStorage.getItem('xmppToken');
//         if(typeof xmppToken !== 'undefined' && xmppToken !== null){
//             const config = {
//                 headers: {
//                     Authorization: `Bearer ${xmppToken}`
//                 }
//             };
//             const res = await axios.get('https://api-chat.api.mythaco.vn/conversations?isGroupChatIncluded=true',config)
//             .then(res => {
//                 res = res.data.data;
//                 messageStore.SetConversations(res.items)
//             })
//         }else{
//             router.replace('/');
//         }
//     }
// })

export default router;