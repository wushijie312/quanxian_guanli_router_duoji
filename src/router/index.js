// router.js 看，只写通用的页面是不是很清爽
import Vue from 'vue';
import Router from 'vue-router';
// import routeMap from '@/router/component.js';

const Login = () => import('@/views/Login.vue');
const Forbidden = () => import('@/views/403.vue');
const Dashboard = () => import('@/views/Dashboard.vue');
const NotFound = () => import('@/views/404.vue');
const Home = () => import('@/views/Home.vue');
const demo1 = () => import('@/views/demo1.vue');
const demo2 = () => import('@/views/demo2.vue');
const demo3 = () => import('@/views/demo3.vue');
const demo4 = () => import('@/views/demo4.vue');
const demo5 = () => import('@/views/demo5.vue');
const demo6 = () => import('@/views/demo6.vue');
const demo7 = () => import('@/views/demo7.vue');
const demo8 = () => import('@/views/demo8.vue');
const demo9 = () => import('@/views/demo9.vue');
const demo10 = () => import('@/views/demo10.vue');

Vue.use(Router);

// 模拟通过接口返回的数据 false为有这个权限，true则没有这个权限，false可以不写‘"/splashAdverse":false,’删除也行，直接写true的即可
let menuDatas = {
    "errno": 0,
    "errmsg": "获取权限成功",
    "result": {
        "/gyspz": true,
        "/gyszh/accountedit": true,
        "/gyszh/invitationcode": true,
        "/gyszh/accountregister": true,
        "/gyszh/invitationcodeview": true,
    }
}

const antRouters = [{
    path: '/',
    redirect: '/dashboard'
}, {
    path: '/login',
    component: Login
}, {
    path: '/403',
    component: Forbidden
}, {
    path: '/404',
    component: NotFound
},
{
    path: '/dashboard',
    component: Dashboard,
}, {
    path: '/home',
    component: Home,
    children: [
        // 供应商配置管理
        {
            path: '/gyspz',
            component: demo7,
            redirect: {
                name: 'gyssortmanage'
            },
            meta: {
                title: '供应商商品配置管理',
                breadcrumb: [
                    [{
                        name: '供应商商品配置管理'
                    }],
                    [{
                        name: 'Supplier commodity configuration management'
                    }]
                ]
            },
            children: [{
                path: '/gyspz/gyssortmanage',
                name: 'gyssortmanage',
                component: demo8,
                meta: {
                    title: '商品分类',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品分类'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Sort management'
                        }]
                    ]
                },
            }, {
                path: '/gyspz/gysbrandmanage',
                component: demo9,
                meta: {
                    title: '商品品牌',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品品牌'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Brand management'
                        }]
                    ]
                },
            }, {
                path: '/gyspz/gysspecmanage',
                component: demo10,
                meta: {
                    title: '商品规格',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品规格'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Specification management'
                        }]
                    ]
                },
            }]
        },// 供应商账户管理
        {
            path: '/gyszh',
            component: demo1,
            redirect: {
                name: 'accountlist'
            },
            meta: {
                title: '供应商账户管理',
                breadcrumb: [
                    [{
                        name: '供应商账户管理'
                    }],
                    [{
                        name: 'Supplier account management'
                    }]
                ]
            },
            children: [{
                path: '/gyszh/accountlist',
                name: 'accountlist',
                component: demo2,
                meta: {
                    title: '账户列表',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户列表'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account list'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/accountedit',
                name: 'accountedit',
                component: demo3,
                meta: {
                    title: '账户编辑',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户列表',
                            path: '/gyszh/accountlist'
                        }, {
                            name: '账户编辑'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account list',
                            path: '/gyszh/accountlist'
                        }, {
                            name: 'Account edit'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/accountregister',
                component: demo4,
                meta: {
                    title: '账户注册',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户注册'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account registration'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/invitationcode',
                component: demo5,
                meta: {
                    title: '邀请码管理',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '邀请码管理'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Invitation code'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/invitationcodeview',
                component: demo6,
                meta: {
                    title: '管理邀请码',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '邀请码管理',
                            path: '/gyszh/invitationcode'
                        }, {
                            name: '管理邀请码'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Invitation code',
                            path: '/gyszh/invitationcode'
                        }, {
                            name: 'Invitation code'
                        }]
                    ]
                },
            },
            ]
        },
    ],
},
]
let menulists = [];
let router = new Router({
    mode: 'hash'
});

const formatRoutes = function (routes, routeData) {

    routes && routeData.forEach(route => {
        if (route.path == "/home") {
            let menus=digui(routes, route.children);
            route.children=menulists=menus;
        }
        
    });
    return routeData;
};
function digui(routes, child) {
    if (child.length) {
        for (var i = 0; i < child.length; i++) {
            var item = child[i];
            if (routes[item.path]) {
                child.splice(i, 1);
                i--;
                continue;
            }
            if (item.children && item.children.length) {
                digui(routes, item.children);
            }
        }
    }
    return child;
}
// 通过登录接口返回权限数据 menuDatas ，然后和home中权限组件进行对比
const menuData = menuDatas.result;
// localStorage.setItem('menudata', JSON.stringify(menuData));
const routeData = formatRoutes(menuData, antRouters);
// router.addRoutes([routeData]);
// var getRouter=antRouters.concat([routeData]);
router.options.routes = routeData;
router.addRoutes(routeData);
console.log(router);
export { router, menulists }