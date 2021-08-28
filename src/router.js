import Vue from "vue";
import Router from 'vue-router';
import home from '@/pages/home.vue';
import inerPost from '@/components/inerPost.vue';


Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: home
        },
        {
            path:'/pages',
            component:inerPost,
        }
    ]
    
});