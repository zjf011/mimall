import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
//import env from './env'

const mock = false;
if (mock) {
    require('./mock/api');
}
//根据前端的跨域方式调整 /a/b => /api/a/b  通过将api设置为空 变回 /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return response.data;
    } else if (res.status == 10) { //10状态码假设是未登录
        if (path != '#/index')
            window.location.href = '/#/login';
    } else {
        Message.warning(res.msg);
        // alert(res.msg);
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
});
Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')