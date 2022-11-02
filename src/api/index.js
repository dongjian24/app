//api统一管理
import requests from './ajax'
import mockAjax from './mockeAjax'



//三级联动接口
//api/product/getBaseCategoryList get 无参数
//发请求:axios发送请求返回结果Promise对象
export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`)



//获取搜索模块数据 地址:/api/list 请求方式 post 参数 需要
/*     {
        'category3Id':'6',
        'categoryName':'SHOUJI',
        'keyword':'iphone',
        'order':'1:desc',
        'pageNo':1,
        'pageSize':10,
        'props':["1:1700-2799:价格","2:6.65-6.74英寸:屏幕尺寸"],
        'tradmark':'4:小米'
    } */
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })


export const reqBannerList = () => mockAjax.get(`/banner`)
export const reqFloorList = () => mockAjax.get(`/floor`)

//商品详情
export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)

//添加购物车成功
export const reqAddOrUpdateCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post', })

//购物车

export const reqCartList = () => requests.get(`/cart/cartList`)


//删除购物车
export const reqDeleteCartById = (skuId) => requests.delete(`/cart/deleteCart/${skuId}`)

//修改商品选中
export const reqUpdateCheckedById = (skuId, isChecked) => requests.get(`/cart/checkCart/${skuId}/${isChecked}`)

//获取验证码
export const reqGetCode = (phone) => requests.get(`/user/passport/sendCode/${phone}`)

//注册
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, method: 'post', data })

//登录
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, method: 'post', data })

//获取用户信息[需要带用户的token向服务器要用户信息]
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' })

//退出登录
export const reqLogOut = () => requests({ url: '/user/passport/logout', method: 'get' })

//获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

//获取商品清单
export const reqOrderInfo = () => requests({ url: 'order/auth/trade', method: 'get' })

//提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data })

//获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

//获取支付订单状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

//获取个人中心数据
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })