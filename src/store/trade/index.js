import { reqAddressInfo, reqOrderInfo } from '@/api'

//state:仓库存储数据的地方
const state = {
    addressInfo: [],
    orderInfo: {}
}
//mutations:修改state的唯一手段
const mutations = {
    GETUSERADDRESS(state, addressInfo) {
        state.addressInfo = addressInfo
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo()
        // console.log(result)
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data)
        }
    },
    //获取商品清单
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        }
    }

}
//getters:计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}