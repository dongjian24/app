import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
import store from '@/store'

//重写push
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve & reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
//全局守卫:前置守卫(在路由跳转之前进行判断)
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('user/getUserInfo')
                    next()
                } catch (error) {
                    //token失效
                    await store.dispatch('user/userLogOut')
                    next('/login')
                }
            }
        }
    } else {
        let toPath = to.path
        if (toPath.indexOf('/trade') !== -1 || toPath.indexOf('/pay') !== -1 || toPath.indexOf('/center') !== -1) {
            next('/login?redirect=' + toPath)
        } else {
            next()
        }
    }
})
export default router