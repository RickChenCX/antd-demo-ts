import axios, {AxiosResponse} from "axios";


interface apiBaseURL {
    [key:string]: string | undefined
}
// 配置不同环境的api接口
const apiBaseURL:apiBaseURL = {
    local: "localhost:3000",
    sit: "localhost:3001",
    prod: ""
}
let api = process.env.REACT_APP_APIENV || "prod"
let baseUrl = apiBaseURL[api]

export let instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
  });

// axios request 拦截

instance.interceptors.request.use( (config) => {
    // Do something before request is sent
    return config;
  },(error) => {
    // Do something with request error
    return Promise.reject(error);
})

// axios response 拦截
instance.interceptors.response.use( (response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });

  /**
 * 封装get请求
 * @param url
 * @param params
 * @returns (Promise)
 */

export function fetch(url: string, params: object) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
            params
        }).then( (res: AxiosResponse<any>) => {
            resolve( res );
        }).catch( error => {
            reject(error);
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns (Promise)
 */

export  function post(url: string, data: object) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then( (res: AxiosResponse<any>) => {
            resolve(res);
        }).catch(error => {
            reject(error);
        })
    })
}