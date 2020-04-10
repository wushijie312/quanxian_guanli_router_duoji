// router.js 看，只写通用的页面是不是很清爽
import Vue from 'vue';
import Router from 'vue-router';
import routeMap from '@/router/component.js';

const Login = () => import('@/views/Login.vue');
const Forbidden = () => import('@/views/403.vue');
const Dashboard = () => import('@/views/Dashboard.vue');
const NotFound = () => import('@/views/404.vue');
Vue.use(Router);

// 模拟通过接口返回的数据
let menuDatas={
    "errno": 0, 
    "errmsg": "获取权限成功", 
    "result": [
        {
            "index": "1", 
            "title": "广告管理", 
            "icon": "iconfont icon-guanggao", 
            "children": [
                {
                    "index": "splashScreen", 
                    "icon": "", 
                    "title": "闪屏关羽配置", 
                    "path": "/home/splashAdverse", 
                    "component": "splashAdverse", 
                    "isShow": true
                }, 
                {
                    "index": "addSplashScreen", 
                    "icon": "", 
                    "title": "新增关羽广告", 
                    "path": "/home/addAdverse", 
                    "component": "addAdverse", 
                    "isShow": false
                }, 
                
            ]
        }, 
        {
            "index": "message", 
            "title": "短信管理", 
            "icon": "iconfont icon-duanxinguanli", 
            "path": "/home/message", 
            "component": "message", 
            "children": [
                {
                    "index": "addMessage", 
                    "title": "新增短信", 
                    "icon": "", 
                    "path": "/home/addMessage", 
                    "component": "addMessage", 
                    "isShow": false
                }
                
            ]
        } 
    ]
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
},
]
let router =new Router({
    mode:'hash'});

const formatRoutes = function (routes, routeData) {
    if (!routeData) {
        routeData = {
            name: 'home',
            path: '/home',
            // 组件匹配成功的话才可以访问具体的页面
            component: routeMap['home'],
            children: [],
        };
    }
    routes.length && routes.forEach(route => {
        if(route.component) {
            route.component = routeMap[route.component];
            routeData.children.push({
                path: route.path,
                name: route.index,
                component: route.component,
                meta: {
                    title: route.title,
                },
            })
        }
        if (route.children && route.children.length) {
            formatRoutes(route.children, routeData);
        }
    });
    return routeData;
};

let isFetchRemote = true;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const username = sessionStorage.getItem('username');
    if(!username && to.path !== '/login'){
        next({path: '/login'});
    }
    else if (isFetchRemote && to.path !== '/login') {
            if (menuDatas.errno === 0) {
                isFetchRemote = false;
                const menuData = menuDatas.result;
                localStorage.setItem('menudata', JSON.stringify(menuData));
                const routeData = formatRoutes(menuData);
                // router.addRoutes([routeData]);
                var getRouter=antRouters.concat([routeData]);
                router.options.routes = getRouter;
                router.addRoutes(getRouter);
                console.log(router);
                // resourceApp.$router.addRoutes([routeData].concat([
                //     {name:'404',path:'/404',component:NotFound},
                //     {path:'*',redirect: '/404'}]));
                // resourceApp.$router.push({
                //     path: to.path,
                //     query: to.query
                // });
            }
            else {
                isFetchRemote = true;
            }
            next();
    }
    else {
        next();
    }
});
export default router