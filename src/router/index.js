//Layout
import { AdminLayout } from '~/layouts';

//Page
import Home from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';

//Admin page
import Admin from '~/pages/Admin';

//publicRouter
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/notfound', component: Login, layout: null },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/admin', component: Admin, layout: AdminLayout },
    { path: '/*', component: Login, layout: AdminLayout },
];
//privateRouter
const privateRoutes = [];

//Export
export { publicRoutes, privateRoutes };
