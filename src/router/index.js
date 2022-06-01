//Layout
import { AdminLayout, AuthLayout } from '~/layouts';

//Page
import Home from '~/pages/Home';
import Login from '~/pages/Login';

//publicRouter
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/notfound', component: Login, layout: null },
    { path: '/login', component: Login, layout: AuthLayout },
    { path: '/admin', component: Login, layout: AdminLayout },
    { path: '/*', component: Login, layout: AdminLayout },
];
//privateRouter
const privateRoutes = [];

//Export
export { publicRoutes, privateRoutes };
