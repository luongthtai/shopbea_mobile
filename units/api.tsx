import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAsyncStorage } from './asyncStorage'

const URL_SERVER = 'http://192.168.1.3:8080/api/v1/'

const instance = axios.create({
    baseURL: URL_SERVER
})

instance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const token = await getAsyncStorage('accessToken')
    config.headers['Authorization'] = token
    return config
}, error => {
    return console.log(error)
})

instance.interceptors.response.use((config: AxiosResponse) => {
    return config
}, error => {
    return console.log(error)
})

export const get = async (url: string) => {
    try {
        const response = await instance.get(url)
        return response.data
    } catch (error: any) {
        return console.log({ message: error.message })
    }
}

export const post = async (url: string, body: any) => {
    try {
        const { data } = await instance.post(url, body)
        return data
    } catch (error: any) {
        return console.log({ message: error.message })
    }
}