//Vue插件一定暴露一个对象
let myPlugins = {}
myPlugins.install=function(Vue,options){
    Vue.directive(options.name,(element,q)=>{
        console.log(q)
    })
}
export default myPlugins