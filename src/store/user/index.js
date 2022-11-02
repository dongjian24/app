import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogOut } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'

//state:仓库存储数据的地方
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}
//mutations:修改state的唯一手段
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()

    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    //获取购物车列表
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        // console.log(result)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({ commit }, data) {
        let result = await reqUserRegister(data)
        console.log(commit)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //登录业务[token]
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            //持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogOut({ commit }) {
        let result = await reqLogOut()
        console.log(result)

        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
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