import { reqGoodsInfo, reqAddOrUpdateCart } from '@/api'
//封装游客身份模块uuid 生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'

//state:仓库存储数据的地方
const state = {
    goodInfo: {},
    //游客临时身份
    uuid_token:getUUID()
}
//mutations:修改state的唯一手段
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    async getGoodInfo({ commit }, skuId) {
        //当前这个函数在调用获取服务器数据时 至少传递一个参数(空对象)
        //params形参 是当用户派发action 第二个参数传递过来 至少是一个空对象
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateCart({ commit }, { skuId, skuNum }) {
        //加入购物车以后 前台将参数带给服务器
        //服务器写入数据成功 并没有返回其他的数据 只返回code200
        //不需要存储数据
        console.log(commit)
        let result = await reqAddOrUpdateCart(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    }

}
//getters:计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}