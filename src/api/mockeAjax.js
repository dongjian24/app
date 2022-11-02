//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import 'nprogress/nprogress.css'
//start进度条开始 done进度条结束

//利用axios对象的方法create 去创建一个axios实例
//request就是axios 只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径,发请求的时候 路径当中会出现api
    baseURL:'/mock',
    //请求超时时间
    timeout:5000
})

//请求拦截器:在发送请求之前 请求拦截器可以检测到 可以在请求发出之前做事
requests.interceptors.request.use((config)=>{
    nProgress.start()
    //config:配置对象 对象里面有一个属性
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done()
    //成功的回调函数 服务器响应数据回来以后 响应拦截器可以检测到
    return res.data
},(error)=>{
    return error.message
    // return Promise.reject(new Error('faile'))
})

export default requests