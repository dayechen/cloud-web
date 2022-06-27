import axios from "axios"
import Config from "./config"

const request = (method: string, url: string, params: any) => {
    return new Promise((resolve) => {
        axios({
            method,
            baseURL: Config.baseURL,
            url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: params,
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const get = (url: string, params: any) => request('get', url, params)
export const post = (url: string, params: any) => request('post', url, params)