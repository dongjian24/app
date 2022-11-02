import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'

//state:仓库存储数据的地方
const state = {
    cartList: [],
}
//mutations:修改state的唯一手段
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    //获取购物车列表
    async getCartList({ commit }) {
        let result = await reqCartList()
        // console.log(result)
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    //删除购物车某一个产品
    async deleteCartListById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        console.log(commit)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //修改购物车某一个产品选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        console.log(commit)
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListById', item.skuId) : ''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    }
}
//getters:计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}