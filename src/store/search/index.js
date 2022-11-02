import { reqGetSearchInfo } from '@/api'

//state:仓库存储数据的地方
const state = {
    searchInfo: {},
}
//mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    async getSearchInfo({ commit }, params = {}) {
        //当前这个函数在调用获取服务器数据时 至少传递一个参数(空对象)
        //params形参 是当用户派发action 第二个参数传递过来 至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
//getters:计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {
    //state.searchList.goodsList如果网络不好返回的是undefined
    //至少要是个数组
    goodsList(state) {
        return state.searchInfo.goodsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList
    },
    attrsList(state) {
        return state.searchInfo.attrsList
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}