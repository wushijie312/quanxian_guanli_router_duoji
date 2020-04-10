// components.js 所有的页面资源  
const home = () => import('@/views/Home.vue');
const addMessage = () => import('@/views/addMessage.vue');
const addAdverse = () => import('@/views/addAdverse.vue');
const splashAdverse = () => import('@/views/splashAdverse.vue');

export default {
    home,
    addMessage,
    addAdverse,
    splashAdverse,
   
};