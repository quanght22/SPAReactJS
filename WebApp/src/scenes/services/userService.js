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
                    let strBuild = '';
                    if (response.data.users) {
                        let userArr = Object.entries(response.data.users);
                        userArr.forEach(u => {
                            strBuild += `> User: ${u[1].username} - Score: ${u[1].score}\n\n`;
                        });
                        resolve(strBuild);
                    }
                })
                .catch(error => reject(error));
        });
    }

}