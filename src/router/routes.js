// import MyHome from '@/views/Home/home'
import MyLogin from '@/views/Login/index'
import MyRegister from '@/views/Register/index'
import MySearch from '@/views/Search/search'
import MyDetail from '@/views/Detail/detail'
import AddCartSuccess from '@/views/AddCartSuccess/index'
import ShopCart from '@/views/ShopCart/index'
import MyTrade from '@/views/Trade/index'
import MyPay from '@/views/Pay/index'
import PaySuccess from '@/views/PaySuccess/index'
import MyCenter from '@/views/Center/index'
//二级路由
import MyOrder from '@/views/Center/MyOrder/MyOrder.vue'



export default [
    {
        path: '/home',
        component: () => import('@/views/Home/home'),
        meta: { isShow: true }
    },
    {
        path: '/login',
        component: MyLogin,
        meta: { isShow: false }
    },
    {
        path: '/register',
        component: MyRegister,
        meta: { isShow: false }
    },
    {
        path: '/search/:keyword?',
        name: 'sousuo',
        component: MySearch,
        meta: { isShow: true },
        props(route) {
            return {
                keyword: route.params.keyword,
                title: route.query.title,
            }

        }
    },
    {
        path: '/detail/:skuId',
        component: MyDetail,
        meta: { isShow: true },
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { isShow: true },
        name: 'addcartsuccess',
    },
    {
        path: '/shopcart/:skuId?',
        component: ShopCart,
        meta: { isShow: true },

    },
    {
        path: '/trade',
        component: MyTrade,
        meta: { isShow: true },
        beforeEnter: (to, from, next) => {
            if (from.path.indexOf('/shopcart') !== -1) {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: MyPay,
        meta: { isShow: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: { isShow: true }
    },
    {
        path: '/center',
        component: MyCenter,
        meta: { isShow: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    //重定向 定位到首页
    {
        path: '*',
        redirect: '/home',
    }
]