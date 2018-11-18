import axios from 'axios';
export default class BaseService {
    constructor() {
        this.baseService = this.initAxios();
    };
    initAxios() {
        const baseService = axios.create({
            baseURL: 'https://localhost:44328', // apiPoints.baseUrl,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        baseService.interceptors.request.use(
            config => {
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        baseService.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                return Promise.reject(error);
            }
        );
        return baseService;
    };
    get(url, params) {
        //return axios.get('https://localhost:44328' + url, {
        //    headers: {
        //        'Access-Control-Allow-Origin': '*',
        //        'Content-Type': 'application/json',
        //        'withCredentials': true,
        //        'crossDomain': true },
        //}).then(res => {
        //    console.log(res);

        //}).catch(error => {
        //    console.log('erro', error);
        //});

        if (!!params) return this.baseService.get(url, params);
        return this.baseService.get(url);
    }
    post(url, params) {
        return this.baseService.post(url, params);
    }
}
