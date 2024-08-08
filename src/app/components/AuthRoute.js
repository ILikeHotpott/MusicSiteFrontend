// 封装高阶组件
// 核心逻辑：有token则返回组件，无token则跳转到登录页面

import {getToken} from '@/utils'
import {Navigate} from 'react-router-dom'


export function AuthRoute({ children }) {
    const token = getToken()
    return token? children : <Navigate to="/login" replace/>
}