import { v4 as uuidv4 } from 'uuid';
//随机字符串 每次执行不发生变化 游客身份持久储存
export const getUUID = () => {
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if(!uuid_token){
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    //切记有返回值 没有返回值undefined
    return uuid_token
}