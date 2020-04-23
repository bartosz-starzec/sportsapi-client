import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard'
import ApiPost from "./components/ApiPost";
import ThirdRoute from "./components/ThirdRoute";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sportsapi-client/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/sportsapi-client/ApiPost',
            name: 'ApiPost',
            component: ApiPost
        },
        {
            path: '/sportsapi-client/third',
            name: 'ThirdRoute',
            component: ThirdRoute
        },
        {
            path: '/*',
            redirect: { name: 'Dashboard'}
        }
    ]
})
