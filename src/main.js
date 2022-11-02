import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//三级联动组件 全局组件
import TypeNav from '@/components/TypeNav/TypeNav'

//轮播图组件
import MyCarousel from '@/components/Carousel/index'

//分页器
import MyPagination from '@/components/Pagination/index'


//引入mock
import '@/mock/mockServer'

import 'swiper/css/swiper.css';

//统一接受api文件
import * as API from '@/api'

import { Button,MessageBox } from 'element-ui';


import VueLazyload from 'vue-lazyload'
import dd from '@/assets/images/loading.gif'

Vue.use(VueLazyload,{
  //懒加载默认的图
  loading: dd,
})

Vue.component(TypeNav.name,TypeNav)
Vue.component(MyCarousel.name,MyCarousel)
Vue.component(MyPagination.name,MyPagination)
//全局注册
Vue.component(Button.name,Button)

//ElementUI注册 挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false

//引入自定义插件
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins,{
  name:'apper'
})

//引入表单校验插件
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
