import axios from "axios"

const request = (method: string, url: string, params: any) => {
    return new Promise((resolve) => {
        axios({
            method,
            baseURL: "http://192.168.1.18:8091/",
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