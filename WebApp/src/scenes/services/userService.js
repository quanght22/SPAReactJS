import BaseService from 'services/baseService';
//import { apiPoints } from './endpoints';

export default class UserService extends BaseService {
    constructor() {
        super();
    }
    async getUserList() {
        let pars = { textSearch: '', currentPage: 1, numberItemOnPage: 10, sortKey: 'lastname', orderBy: 'desc' };
        return await new Promise((resolve, reject) => {
            this.get(`/api/getlistcustomer`, pars)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => reject(error));
        });
    }

}