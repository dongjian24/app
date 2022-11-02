import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'


//state:仓库存储数据的地方
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
//mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
        console.log('赋值给bannerList')
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
//actions:写自己的业务逻辑 处理异步
const actions = {
    //通过API里面的接口函数调用 向服务器发请求 获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
        // console.log(result)
    },
    async getBannerList({commit}){
        console.log('获取服务器数据')
        let result = await reqBannerList()
        if(result.code == 200){
            commit('BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code == 200){
            commit('FLOORLIST',result.data)
        }
    }
}
//getters:计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}