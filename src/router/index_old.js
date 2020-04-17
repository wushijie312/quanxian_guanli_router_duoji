// router.js 看，只写通用的页面是不是很清爽
import Vue from 'vue';
import Router from 'vue-router';
// import routeMap from '@/router/component.js';

const Login = () => import('@/views/Login.vue');
const Forbidden = () => import('@/views/403.vue');
const Dashboard = () => import('@/views/Dashboard.vue');
const NotFound = () => import('@/views/404.vue');
const Home = () => import('@/views/Home.vue');
const splashAdverse = () => import('@/views/splashAdverse.vue');
const addAdverse = () => import('@/views/addAdverse.vue');
const addMessage = () => import('@/views/addMessage.vue');
Vue.use(Router);

// 模拟通过接口返回的数据 false为有这个权限，true则没有这个权限，false可以不写‘"/splashAdverse":false,’删除也行，直接写true的即可
let menuDatas={
    "errno": 0, 
    "errmsg": "获取权限成功", 
    "result": {
           "/splashAdverse":false,
           "/addAdverse":false,      
           "/addMessage":true,          
        }
}


const antRouters=[{
    path: '/',
    redirect: '/dashboard'
},{
    path: '/login',
    component: Login
},{
    path: '/403',
    component: Forbidden
},{
    path: '/404',
    component: NotFound
},
{
    path: '/dashboard',
    component: Dashboard,
},{
    path: '/home',
    component: Home,
    children: [{
        path:'/splashAdverse',
        component:splashAdverse
     },{
        path:'/addAdverse',
        component:addAdverse
     },{
        path:'/addMessage',
        component:addMessage
     }],
},
]
let menulists=[];
let router =new Router({
    mode:'hash'});

const formatRoutes = function (routes, routeData) {
    
    routes && routeData.forEach(route => {
        if(route.path=="/home") {
          var homelists= route.children.length&&route.children.filter((item)=>{
                return !routes[item.path]
            });
            route.children=menulists=homelists;
        }
    });
    return routeData;
};

// 通过登录接口返回权限数据 menuDatas ，然后和home中权限组件进行对比
const menuData = menuDatas.result;
// localStorage.setItem('menudata', JSON.stringify(menuData));
const routeData = formatRoutes(menuData,antRouters);
// router.addRoutes([routeData]);
// var getRouter=antRouters.concat([routeData]);
router.options.routes = routeData;
router.addRoutes(routeData);
console.log(router);
export { router,menulists}