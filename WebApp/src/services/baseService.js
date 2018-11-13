import axios from 'axios';
export default class BaseService {
    constructor() {
        this.baseService = this.initAxios();
    };
    initAxios(){
        const baseService = axios.create({
            baseURL: 'https://localhost:44328', // apiPoints.baseUrl,
            withCredentials: false,
            headers: {
                Accept: 'application/json',
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
        if (!!params) {
           return this.baseService.get(url, params);
        } else {
           return this.baseService.get(url);
        }
    }
    post(url, params) {
        let apiURL = this.getApiURL(url);
        return this.baseService.post(apiURL, params);
    }
}
