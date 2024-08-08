import axios from "axios";
import {getToken} from "@/utils/token";

// 1. 根域名配置
// 2. 请求超时时间配置
// 3. 请求拦截器配置/响应拦截器配置

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    withCredentials: true
})

// 添加请求拦截器
// 在发送请求之前做拦截 插入一些自定义的配置
request.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 添加响应拦截器
// 在响应返回到客户端之前做拦截 重点处理返回的数据
request.interceptors.request.use((response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response;
}, (error) => {
    // 超出2xx范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error);
})

export {request}